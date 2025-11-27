import { redis } from "../../../lib/redis";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const limit = parseInt(searchParams.get("limit") || "100");

        // Бүх visit түлхүүрүүдийг авах
        const keys = await redis.keys("visit:*");

        // Хамгийн сүүлийн {limit} logs авах
        const recentKeys = keys.slice(-limit).reverse();

        // Бүх логуудыг авах
        const logs = await Promise.all(
            recentKeys.map(async (key) => {
                const data = await redis.get(key);
                return data ? JSON.parse(data) : null;
            })
        );

        // Статистик мэдээлэл
        const totalVisits = await redis.get("total_visits") || 0;

        // Path statistics
        const pathKeys = await redis.keys("path:*");
        const pathStats = await Promise.all(
            pathKeys.map(async (key) => {
                const count = await redis.get(key);
                return {
                    path: key.replace("path:", ""),
                    count: parseInt(count) || 0,
                };
            })
        );

        return Response.json({
            success: true,
            totalVisits: parseInt(totalVisits),
            logs: logs.filter(Boolean),
            pathStats: pathStats.sort((a, b) => b.count - a.count),
            count: logs.filter(Boolean).length,
        });
    } catch (error) {
        console.error("Error fetching logs:", error);
        return Response.json(
            {
                success: false,
                error: error.message,
                totalVisits: 0,
                logs: [],
                pathStats: [],
            },
            { status: 500 }
        );
    }
}
