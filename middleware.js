import { NextResponse } from "next/server";
import { redis } from "./lib/redis.js";

export async function middleware(req) {
    const path = req.nextUrl.pathname;
    const userAgent = req.headers.get("user-agent") || "Unknown";

    // 🛡️ Халдлагын оролдлогыг блоклох
    const maliciousPaths = [
        '.env',
        '.git',
        'wp-admin',
        'wp-login',
        'phpMyAdmin',
        'admin.php',
        '.ssh',
        '.aws',
        'config.php',
        'wp-config',
    ];

    // Хэрэв халдлагын зам бол 403 буцаах
    if (maliciousPaths.some(malPath => path.includes(malPath))) {
        console.log(`🚨 BLOCKED ATTACK: ${path} from ${req.headers.get("x-forwarded-for")}`);
        return new NextResponse('Access Denied', { status: 403 });
    }

    // Зарим хортой bot-уудыг блоклох
    const blockedBots = [
        'python-httpx',
        'python-requests',
        'masscan',
        'sqlmap',
        'nikto',
    ];

    if (blockedBots.some(bot => userAgent.toLowerCase().includes(bot.toLowerCase()))) {
        console.log(`🚨 BLOCKED BOT: ${userAgent} trying ${path}`);
        return new NextResponse('Access Denied', { status: 403 });
    }

    try {
        // Visitor мэдээлэл цуглуулах
        const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || req.ip || "Unknown IP";
        const path = req.nextUrl.pathname;
        const userAgent = req.headers.get("user-agent") || "Unknown";
        const referer = req.headers.get("referer") || "Direct";
        const country = req.geo?.country || "Unknown";
        const city = req.geo?.city || "Unknown";
        const timestamp = new Date().toISOString();

        // 🔑 Session tracking - IP + UserAgent combo ашиглан давхардуулахгүй
        const sessionKey = `session:${ip}:${Buffer.from(userAgent).toString('base64').substring(0, 20)}`;

        // Session шалгах (30 минутын хугацаатай)
        const existingSession = await redis.get(sessionKey).catch(() => null);

        // Хэрэв session байвал log үүсгэхгүй, шууд буцаах
        if (existingSession) {
            return NextResponse.next();
        }

        // User Agent-ийг ойлгомжтой болгох
        let deviceType = "Unknown";
        if (userAgent.includes("Mobile") || userAgent.includes("Android") || userAgent.includes("iPhone")) {
            deviceType = "📱 Mobile";
        } else if (userAgent.includes("Tablet") || userAgent.includes("iPad")) {
            deviceType = "📱 Tablet";
        } else if (userAgent.includes("bot") || userAgent.includes("crawler") || userAgent.includes("spider") || userAgent.includes("vercel")) {
            deviceType = "🤖 Bot";
        } else if (userAgent.includes("Windows") || userAgent.includes("Macintosh") || userAgent.includes("Linux")) {
            deviceType = "💻 Desktop";
        }

        // Log object үүсгэх
        const logEntry = {
            ip,
            path,
            userAgent,
            deviceType,
            referer,
            country,
            city,
            timestamp,
            method: req.method,
        };

        // Console лог (Vercel logs-д харагдана)
        console.log("📊 NEW VISITOR:", JSON.stringify(logEntry, null, 2));

        // Session үүсгэх (30 минут = 1800 секунд)
        await redis.setex(sessionKey, 1800, "active").catch(err => {
            console.error("❌ Redis session error:", err);
        });

        // Upstash-д хадгалах (асинхрон, хариуг хүлээхгүй)
        const logKey = `visit:${Date.now()}:${Math.random().toString(36).substr(2, 9)}`;

        // Background-д хадгалах (response-ийг удаашруулахгүй)
        redis.setex(logKey, 604800, JSON.stringify(logEntry)).catch(err => {
            console.error("❌ Redis error:", err);
        });

        // Visitor count нэмэх
        redis.incr("total_visits").catch(err => {
            console.error("❌ Redis counter error:", err);
        });

        // Path бүрээр тоолох
        redis.incr(`path:${path}`).catch(err => {
            console.error("❌ Redis path counter error:", err);
        });

    } catch (error) {
        console.error("❌ Middleware error:", error);
    }

    return NextResponse.next();
}

// Middleware ажиллах хуудсууд (static files-ыг алгасах)
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder files
         */
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
