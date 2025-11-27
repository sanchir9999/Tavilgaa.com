"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AdminLogsPage() {
    const [logs, setLogs] = useState([]);
    const [stats, setStats] = useState({ totalVisits: 0, pathStats: [] });
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(100);

    const fetchLogs = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/logs?limit=${limit}`);
            const data = await res.json();

            if (data.success) {
                setLogs(data.logs);
                setStats({
                    totalVisits: data.totalVisits,
                    pathStats: data.pathStats,
                });
            }
        } catch (error) {
            console.error("Error fetching logs:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLogs();
        // Auto refresh every 10 seconds
        const interval = setInterval(fetchLogs, 10000);
        return () => clearInterval(interval);
    }, [limit]);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />

            <div className="container mx-auto px-4 py-24 max-w-7xl">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        📊 Сайтын Хандалтын Лог
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Бүх хуудсын дэлгэрэнгүй хандалтын мэдээлэл
                    </p>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            Нийт хандалт
                        </div>
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                            {stats.totalVisits.toLocaleString()}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            Логуудын тоо
                        </div>
                        <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                            {logs.length}
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            Хамгийн их хандалт
                        </div>
                        <div className="text-xl font-bold text-purple-600 dark:text-purple-400 truncate">
                            {stats.pathStats[0]?.path || "N/A"}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                            {stats.pathStats[0]?.count || 0} удаа
                        </div>
                    </div>
                </div>

                {/* Path Statistics */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-8 p-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        📈 Хуудас бүрийн хандалт
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {stats.pathStats.slice(0, 10).map((stat, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded"
                            >
                                <span className="text-sm font-mono text-gray-700 dark:text-gray-300 truncate">
                                    {stat.path}
                                </span>
                                <span className="ml-4 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                                    {stat.count}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Controls */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow mb-6 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Логын тоо:
                        </label>
                        <select
                            value={limit}
                            onChange={(e) => setLimit(Number(e.target.value))}
                            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                            <option value={200}>200</option>
                            <option value={500}>500</option>
                        </select>
                    </div>

                    <button
                        onClick={fetchLogs}
                        disabled={loading}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium disabled:opacity-50"
                    >
                        {loading ? "⏳ Ачааллаж байна..." : "🔄 Шинэчлэх"}
                    </button>
                </div>

                {/* Logs Table */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase">
                                        Цаг
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase">
                                        IP хаяг
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase">
                                        Хуудас
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase">
                                        Улс/Хот
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase">
                                        Төхөөрөмж
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {logs.map((log, idx) => {
                                    // UTC-ээс Монголын цаг руу хөрвүүлэх (UTC+8)
                                    const utcDate = new Date(log.timestamp);
                                    const mongolTime = new Date(utcDate.getTime() + (8 * 60 * 60 * 1000));
                                    const formattedTime = mongolTime.toLocaleString("mn-MN", {
                                        year: 'numeric',
                                        month: '2-digit',
                                        day: '2-digit',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        second: '2-digit',
                                        hour12: false
                                    });

                                    return (
                                    <tr
                                        key={idx}
                                        className="hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                                    >
                                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
                                            {formattedTime}
                                            <div className="text-xs text-gray-500">UB цаг</div>
                                        </td>
                                        <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">
                                            {log.ip}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-gray-100">
                                            <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                                                {log.path}
                                            </code>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                                            {log.country} / {log.city}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <span>{log.deviceType || (log.userAgent?.includes("Mobile") ? "📱 Mobile" : log.userAgent?.includes("bot") || log.userAgent?.includes("vercel") ? "🤖 Bot" : "💻 Desktop")}</span>
                                            </div>
                                            <div className="text-xs text-gray-500 mt-1 truncate max-w-xs" title={log.userAgent}>
                                                {log.userAgent?.substring(0, 40)}...
                                            </div>
                                        </td>
                                    </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {logs.length === 0 && !loading && (
                        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                            Лог олдсонгүй
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}
