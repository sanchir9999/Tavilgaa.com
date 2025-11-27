"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/**
 * @typedef {Object} Product
 * @property {string} slug
 * @property {string} name
 * @property {string} price
 * @property {string} imageUrl
 * @property {boolean} available
 * @property {"chair"|"table"|"set"|"accessory"} category
 */

/** @type {Product[]} */
const chairs = [
    {
        slug: "office-chair-1",
        name: "Оффис Сандал",
        price: "₮100,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1751379481/01c4fb9a-96d1-464b-a035-32df5dc1a030_iqijn9.jpg",
        available: true,
        category: "chair",
    },
    {
        slug: "gaming-chair",
        name: "Gaming Сандал",
        price: "₮350,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1748438803/807c807c3ca916d25989b04ef6b6e3cb48a0b398160e_Pzl98a188e6d70ec6_jpg_dvwr1c.webp",
        available: false,
        category: "chair",
    },
    {
        slug: "guest-chair",
        name: "Зочны сандал",
        price: "₮90,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1748438803/24-0228795_kr64kz.jpg",
        available: false,
        category: "chair",
    },
    {
        slug: "office-chair-2",
        name: "Оффис Сандал",
        price: "₮383,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851610/2811ca9e0577ebaf2a33354fd9d4e0c7_yofpof.jpg",
        available: true,
        category: "chair",
    },
    {
        slug: "office-chair-3",
        name: "Оффис Сандал",
        price: "₮400,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851611/0050fd0dac735ed9d02f0a370ee23629_jdskuc.jpg",
        available: true,
        category: "chair",
    },
    {
        slug: "office-chair-4",
        name: "Оффис Сандал",
        price: "₮385,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851611/910cf650c38767dd48acaa39786ebd09_h7epnj.jpg",
        available: true,
        category: "chair",
    },
    {
        slug: "office-chair-5",
        name: "Оффис Сандал",
        price: "₮375,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851611/be9258e84d4fadc02ba3fb31b9bdfd64_k8saxt.jpg",
        available: true,
        category: "chair",
    },
    {
        slug: "training-chair-black",
        name: "Сургалтын сандал (Хар)",
        price: "₮150,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1750854362/e85a6b3f7fd1ee09a4d2989f050f3d64_1_qmeycj.jpg",
        available: true,
        category: "chair",
    },
];

/** @type {Product[]} */
const tables = [
    {
        slug: "office-table",
        name: "Оффис Ширээ",
        price: "₮380,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1748864027/69b525492207e6f404341e8887e3b810_kgaxp2.jpg",
        available: true,
        category: "table",
    },
    {
        slug: "guest-table",
        name: "Зочны Ширээ",
        price: "₮380,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1748864027/44a9f1298c471d1b9fb86fb41e97c7dd_e1gqzd.jpg",
        available: false,
        category: "table",
    },
    {
        slug: "dining-table",
        name: "Хоолны Ширээ",
        price: "₮380,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1748864027/84d70df95b56ee8c9ecb5efa78fe6fef_nuuxyg.jpg",
        available: false,
        category: "table",
    },
    {
        slug: "pc-desk-set",
        name: "Компьютерын ширээ сандал",
        price: "₮300,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1751379232/d4651328-edfc-47dd-94f3-4815eb22ae9c_ujvtjz.jpg",
        available: true,
        category: "table",
    },
];

/** @type {Product[]} */
const sets = [
    {
        slug: "pc-desk-set",
        name: "Компьютерын ширээ сандал багц",
        price: "₮300,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1751379232/d4651328-edfc-47dd-94f3-4815eb22ae9c_ujvtjz.jpg",
        available: true,
        category: "set",
    },
    {
        slug: "office-set-deluxe",
        name: "Оффис багц (Deluxe)",
        price: "₮650,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851610/2811ca9e0577ebaf2a33354fd9d4e0c7_yofpof.jpg",
        available: true,
        category: "set",
    },
];

/** @type {Product[]} */
const accessories = [
    {
        slug: "desk-lamp",
        name: "Ширээний Чийдэн",
        price: "₮45,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1748864027/69b525492207e6f404341e8887e3b810_kgaxp2.jpg",
        available: true,
        category: "accessory",
    },
    {
        slug: "cushion-pad",
        name: "Сандлын Дэвсгэр",
        price: "₮25,000",
        imageUrl:
            "https://res.cloudinary.com/ddyif81ff/image/upload/v1748438803/24-0228795_kr64kz.jpg",
        available: true,
        category: "accessory",
    },
];

const PRODUCTS = [...chairs, ...tables, ...sets, ...accessories];

const Section = ({ title, subtitle, children }) => (
    <section className="container mx-auto max-w-7xl px-3 sm:px-6 md:px-8 py-5 md:py-14">
        <div className="mb-6 md:mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
            {/* Subtitle hidden to keep UI concise */}
        </div>
        {children}
    </section>
);

const StockBadge = ({ available }) => (
    <div className="absolute left-2 top-2">
        <Badge variant={available ? "default" : "secondary"} className="rounded-full">
            {available ? "Бэлэн" : "5 хоногт Улаанбаатарт ирнэ"}
        </Badge>
    </div>
);

const ProductCard = ({ product }) => (
    <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="group relative rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
    >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
            <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                priority={false}
            />
            <StockBadge available={product.available} />
        </div>

        <div className="p-3 md:p-4 flex-1 flex flex-col">
            <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm md:text-base font-semibold leading-tight line-clamp-2">
                    {product.name}
                </h3>
                <Badge variant="outline" className="whitespace-nowrap hidden">
                    {product.category === "chair" ? "Сандал" : "Ширээ"}
                </Badge>
            </div>
            <p className="mt-1 text-xs md:text-sm text-muted-foreground">{product.price}</p>

            <div className="flex justify-center mt-auto mt-8">
                <Link href={`/products/${product.slug}`}>
                    <Button>Захиалах</Button>
                </Link>
            </div>
        </div>
    </motion.div>
);


const CategoryChips = ({ active, onChange }) => (
    <div className="flex flex-wrap items-center justify-center gap-2">
        {[
            { key: "all", label: "Бүгд" },
            { key: "chair", label: "Сандлууд" },
            { key: "table", label: "Ширээнүүд" },
            { key: "set", label: "Багцууд" },
            { key: "accessory", label: "Дагалдах хэрэгсэл" },
        ].map((c) => (
            <Button
                key={c.key}
                variant={active === c.key ? "default" : "outline"}
                size="sm"
                onClick={() => onChange(c.key)}
                className="rounded-full"
            >
                {c.label}
            </Button>
        ))}
    </div>
);

// ----------------------
// ЗӨВХӨН НЭГ default ЭКСПОРТ!!!
// ----------------------
export default function Container() {
    const [category, setCategory] = useState("all");
    const filtered = PRODUCTS.filter((p) =>
        category === "all" ? true : p.category === category
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
            {/* Hero */}
            <header className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(59,130,246,0.12),transparent)]" />
                <Section
                    title="Таны хэрэгцээг бид хангана"
                    subtitle="Эргоном загвар, чанартай материал, шуурхай нийлүүлэлт — бизнес ба гэрийн орчинд тохирох шийдлүүд."
                >
                    <div className="flex flex-col items-center gap-4">
                        <div className="hidden items-center gap-2 text-sm text-muted-foreground">
                            <Badge variant="secondary">Шинэ цуглуулга</Badge>
                            <span>2025 / Намар</span>
                        </div>
                        <div className="mt-2">
                            <Link href="#products">
                                <Button
                                    size="lg"
                                    className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-6 text-lg relative overflow-hidden group"
                                >
                                    <span className="relative z-10 flex items-center gap-3">
                                        <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                        Бүтээгдэхүүн үзэх
                                        <svg className="w-6 h-6 group-hover:-rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Section>

            </header>

            {/* Гол ангиллууд */}
            <Section title="Ангиллууд" subtitle="Үндсэн бүтээгдэхүүний төрөл">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { key: "chair", title: "Сандал", href: "/category/chairs", img: chairs[0]?.imageUrl },
                        { key: "table", title: "Ширээ", href: "/category/tables", img: tables[0]?.imageUrl },
                        { key: "set", title: "Комплект", href: "/category/sets", img: tables[3]?.imageUrl },
                        { key: "accessory", title: "Дагалдах хэрэгсэл", href: "/category/accessories", img: chairs[1]?.imageUrl },
                    ].map((c) => (
                        <Link
                            key={c.key}
                            href={c.href}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md"
                        >
                            {c.img ? (
                                <Image
                                    src={c.img}
                                    alt={c.title}
                                    fill
                                    className="object-cover opacity-90 group-hover:opacity-100"
                                />
                            ) : null}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                            <div className="absolute bottom-3 left-3">
                                <span className="inline-block px-3 py-1 rounded-full text-white text-sm bg-black/50 backdrop-blur">
                                    {c.title}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>

            {/* Шүүлтүүртэй бүтээгдэхүүн */}
            <Section title="Онцлох бүтээгдэхүүн" subtitle="Бэлэн бараа ба урьдчилсан захиалга">
                {/* SEO агуулга */}
                <div className="mb-8 text-center max-w-4xl mx-auto">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        Монголд <strong>оффис тавилга</strong>, <strong>оффис сандал</strong>, <strong>оффис ширээ</strong>,
                        <strong> gaming сандал</strong>, <strong>компьютерын ширээ сандал</strong> хайж байна уу?
                        Tavilgaa.com нь Улаанбаатар хотод эргономик дизайнтай, чанартай материалаар хийгдсэн
                        <strong> ширээ сандал</strong>, <strong>тавилга</strong> худалдаалдаг Монголын тэргүүлэх онлайн дэлгүүр юм.
                        Бид <strong>хямд үнэ</strong>-тэй, шуурхай хүргэлттэй үйлчилгээ үзүүлдэг.
                    </p>
                </div>

                <div className="mb-6">
                    <CategoryChips active={category} onChange={setCategory} />
                </div>

                <div
                    id="products"
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 scroll-mt-24"
                >
                    {filtered.map((p) => (
                        <ProductCard key={p.slug} product={p} />
                    ))}
                </div>
            </Section>

            {/* Хамтрагч байгууллагууд */}
            <Section
                title="Хамтран ажилладаг байгууллагууд"
                subtitle="Оффис интерьер, барилга угсралт, логистик, санхүүгийн түншүүд"
            >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                    {[
                        "/partners/partner1.svg",
                        "/partners/partner2.svg",
                        "/partners/partner3.svg",
                        "/partners/partner4.svg",
                        "/partners/partner5.svg",
                        "/partners/partner6.svg",
                    ].map((src, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-center rounded-xl bg-white p-4 shadow-sm"
                        >
                            <Image
                                src={src}
                                alt={`Partner ${i + 1}`}
                                width={120}
                                height={36}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </Section>

            {/* CTA */}
            <Section
                title="Төслийн нийлүүлэлт, B2B захиалга"
                subtitle="Ажлын байрны стандартчилагдсан шийдлээс эхлээд, тусгай загвар боловсруулах хүртэл бүтэн үйлчилгээ. Үнийн санал авах бол доорх товчийг дарна уу."
            >
                <div className="flex justify-center">
                    <Link href="/quote">
                        <Button size="lg">Үнийн санал авах</Button>
                    </Link>
                </div>
            </Section>

            {/* <footer className="border-t bg-white/80"> */}
            {/* footer removed */}
        </div>
    );
}
