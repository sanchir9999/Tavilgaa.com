import { NextResponse } from "next/server";
import { redis } from "./lib/redis.js";

export async function middleware(req) {
    try {
        // Visitor мэдээлэл цуглуулах
        const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || req.ip || "Unknown IP";
        const path = req.nextUrl.pathname;
        const userAgent = req.headers.get("user-agent") || "Unknown";
        const referer = req.headers.get("referer") || "Direct";
        const country = req.geo?.country || "Unknown";
        const city = req.geo?.city || "Unknown";
        const timestamp = new Date().toISOString();

        // Log object үүсгэх
        const logEntry = {
            ip,
            path,
            userAgent,
            referer,
            country,
            city,
            timestamp,
            method: req.method,
        };

        // Console лог (Vercel logs-д харагдана)
        console.log("📊 VISITOR:", JSON.stringify(logEntry, null, 2));

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
