"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Бүх бүтээгдэхүүнүүдийн өгөгдөл
const chairs = [
    {
        slug: "office-chair-1",
        name: "Оффис Сандал",
        price: "₮100,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1751379481/01c4fb9a-96d1-464b-a035-32df5dc1a030_iqijn9.jpg",
        available: true,
        category: "chairs",
    },
    {
        slug: "gaming-chair",
        name: "Gaming Сандал",
        price: "₮350,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1748438803/807c807c3ca916d25989b04ef6b6e3cb48a0b398160e_Pzl98a188e6d70ec6_jpg_dvwr1c.webp",
        available: false,
        category: "chairs",
    },
    {
        slug: "guest-chair",
        name: "Зочны сандал",
        price: "₮90,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1748438803/24-0228795_kr64kz.jpg",
        available: false,
        category: "chairs",
    },
    {
        slug: "office-chair-2",
        name: "Оффис Сандал",
        price: "₮383,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851610/2811ca9e0577ebaf2a33354fd9d4e0c7_yofpof.jpg",
        available: true,
        category: "chairs",
    },
    {
        slug: "office-chair-3",
        name: "Оффис Сандал",
        price: "₮400,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851611/0050fd0dac735ed9d02f0a370ee23629_jdskuc.jpg",
        available: true,
        category: "chairs",
    },
    {
        slug: "office-chair-4",
        name: "Оффис Сандал",
        price: "₮385,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851611/910cf650c38767dd48acaa39786ebd09_h7epnj.jpg",
        available: true,
        category: "chairs",
    },
    {
        slug: "office-chair-5",
        name: "Оффис Сандал",
        price: "₮375,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851611/be9258e84d4fadc02ba3fb31b9bdfd64_k8saxt.jpg",
        available: true,
        category: "chairs",
    },
    {
        slug: "training-chair-black",
        name: "Сургалтын сандал (Хар)",
        price: "₮150,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1750854362/e85a6b3f7fd1ee09a4d2989f050f3d64_1_qmeycj.jpg",
        available: true,
        category: "chairs",
    },
];

const tables = [
    {
        slug: "office-table",
        name: "Оффис Ширээ",
        price: "₮380,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1748864027/69b525492207e6f404341e8887e3b810_kgaxp2.jpg",
        available: true,
        category: "tables",
    },
    {
        slug: "guest-table",
        name: "Зочны Ширээ",
        price: "₮380,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1748864027/44a9f1298c471d1b9fb86fb41e97c7dd_e1gqzd.jpg",
        available: false,
        category: "tables",
    },
    {
        slug: "dining-table",
        name: "Хоолны Ширээ",
        price: "₮380,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1748864027/84d70df95b56ee8c9ecb5efa78fe6fef_nuuxyg.jpg",
        available: false,
        category: "tables",
    },
    {
        slug: "pc-desk-set",
        name: "Компьютерын ширээ сандал",
        price: "₮300,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1751379232/d4651328-edfc-47dd-94f3-4815eb22ae9c_ujvtjz.jpg",
        available: true,
        category: "tables",
    },
];

const sets = [
    {
        slug: "pc-desk-set",
        name: "Компьютерын ширээ сандал багц",
        price: "₮300,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1751379232/d4651328-edfc-47dd-94f3-4815eb22ae9c_ujvtjz.jpg",
        available: true,
        category: "sets",
    },
    {
        slug: "office-set-deluxe",
        name: "Оффис багц (Deluxe)",
        price: "₮650,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851610/2811ca9e0577ebaf2a33354fd9d4e0c7_yofpof.jpg",
        available: true,
        category: "sets",
    },
];

const accessories = [
    {
        slug: "desk-lamp",
        name: "Ширээний Чийдэн",
        price: "₮45,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1748864027/69b525492207e6f404341e8887e3b810_kgaxp2.jpg",
        available: true,
        category: "accessories",
    },
    {
        slug: "cushion-pad",
        name: "Сандлын Дэвсгэр",
        price: "₮25,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1748438803/24-0228795_kr64kz.jpg",
        available: true,
        category: "accessories",
    },
];

const PRODUCTS = [...chairs, ...tables, ...sets, ...accessories];

// Категори тохиргоо
const categoryConfig = {
    chairs: {
        title: "Сандлууд",
        subtitle: "Оффис болон гэрийн сандлын өргөн сонголт",
        seo: {
            title: "Оффис Сандал, Gaming Сандал, Эргономик Сандал | Монголд Хямд Үнэ",
            description: "🪑 Оффис сандал, gaming сандал, эргономик сандал, компьютерын сандал Монголд. ✅ Чанартай ✅ Хямд үнэ ✅ 24 цагт хүргэлт. 50+ төрлийн сандал. Одоо захиалаарай!",
            keywords: "оффис сандал, gaming сандал, эргономик сандал, компьютерын сандал, зочны сандал, сургалтын сандал, ажлын сандал, хямд сандал",
        }
    },
    tables: {
        title: "Ширээнүүд",
        subtitle: "Янз бүрийн төрлийн ширээнүүд",
        seo: {
            title: "Оффис Ширээ, Компьютерын Ширээ, Ажлын Ширээ | Монголд Хямд Үнэ",
            description: "🖥️ Оффис ширээ, компьютерын ширээ, ажлын ширээ Монголд. ✅ Эргономик дизайн ✅ Чанартай материал ✅ Хямд үнэ ✅ 24 цагт хүргэлт. Одоо захиалаарай!",
            keywords: "оффис ширээ, компьютерын ширээ, ажлын ширээ, зочны ширээ, хоолны ширээ, хямд ширээ",
        }
    },
    sets: {
        title: "Багцууд",
        subtitle: "Ширээ сандал багцын төгс хослолууд",
        seo: {
            title: "Ширээ Сандал Багц, Оффис Багц | Монголд Хямд Үнэ",
            description: "📦 Ширээ сандал багц, оффис багц, компьютерын ширээ сандал багц Монголд. ✅ Төгс хослол ✅ Хямд үнэ ✅ 24 цагт хүргэлт. Одоо захиалаарай!",
            keywords: "ширээ сандал багц, оффис багц, компьютерын ширээ сандал, тавилгын багц, хямд багц",
        }
    },
    accessories: {
        title: "Дагалдах хэрэгсэл",
        subtitle: "Таны ажлын орчныг бүрэн болгох дагалдах хэрэгсэл",
        seo: {
            title: "Оффисын Дагалдах Хэрэгсэл, Ширээний Чийдэн | Монголд",
            description: "💡 Оффисын дагалдах хэрэгсэл, ширээний чийдэн, сандлын дэвсгэр Монголд. ✅ Чанартай ✅ Хямд үнэ ✅ Хүргэлт. Одоо захиалаарай!",
            keywords: "оффисын дагалдах хэрэгсэл, ширээний чийдэн, сандлын дэвсгэр, тавилгын дагалдах хэрэгсэл",
        }
    },
};

// Бүтээгдэхүүний карт компонент
const ProductCard = ({ product }) => (
    <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
        <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700">
            <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {!product.available && (
                <Badge className="absolute top-3 right-3 bg-red-500 text-white">
                    Дууссан
                </Badge>
            )}
            {product.available && (
                <Badge className="absolute top-3 right-3 bg-green-500 text-white">
                    Бэлэн байна
                </Badge>
            )}
        </div>
        <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                {product.name}
            </h3>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                {product.price}
            </p>
            <Link href={`/products/${product.slug}`}>
                <Button
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={!product.available}
                >
                    {product.available ? "Дэлгэрэнгүй" : "Дууссан"}
                </Button>
            </Link>
        </div>
    </motion.div>
);

export default function CategoryPage({ params }) {
    const { slug } = params;
    const config = categoryConfig[slug];

    // Тухайн категорийн бүтээгдэхүүнүүд
    const products = PRODUCTS.filter((p) => p.category === slug);

    if (!config) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <Head>
                    <title>Категори олдсонгүй | Tavilgaa.com</title>
                </Head>
                <Navbar />
                <div className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Категори олдсонгүй
                    </h1>
                    <Link href="/">
                        <Button className="mt-6">Нүүр хуудас руу буцах</Button>
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Head>
                <title>{config.seo.title}</title>
                <meta name="description" content={config.seo.description} />
                <meta name="keywords" content={config.seo.keywords} />
                <meta property="og:title" content={config.seo.title} />
                <meta property="og:description" content={config.seo.description} />
                <meta property="og:url" content={`https://tavilgaa.com/category/${slug}`} />
            </Head>
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 md:py-24 mt-16">
                <div className="container mx-auto max-w-7xl px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                            {config.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            {config.subtitle}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
                {products.length > 0 ? (
                    <>
                        <div className="mb-6">
                            <p className="text-gray-600 dark:text-gray-400">
                                Нийт {products.length} бүтээгдэхүүн олдлоо
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {products.map((product, idx) => (
                                <motion.div
                                    key={product.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                            Энэ категорид бүтээгдэхүүн байхгүй байна
                        </p>
                        <Link href="/">
                            <Button>Нүүр хуудас руу буцах</Button>
                        </Link>
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
}
