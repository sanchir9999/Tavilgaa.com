"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Ordermodel from "@/components/Ordermodel/Ordermodel";
import { Button } from "@/components/ui/button";

const products = [
    {
        slug: "office-chair-1",
        name: "Оффис Сандал",
        price: "₮100,000",
        imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748111169/Halada_shop_3_ydujzx.png",
        available: true,
    },
    {
        slug: "gaming-chair",
        name: "Gaming Сандал",
        price: "₮350,000",
        imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748438803/807c807c3ca916d25989b04ef6b6e3cb48a0b398160e_Pzl98a188e6d70ec6_jpg_dvwr1c.webp",
        available: false,
    },
    {
        slug: "guest-chair",
        name: "Зочны сандал",
        price: "₮90,000",
        imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748438803/24-0228795_kr64kz.jpg",
        available: false,
    },
    {
        slug: "office-chair-2",
        name: "Оффис Сандал",
        price: "₮383,000",
        imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851610/2811ca9e0577ebaf2a33354fd9d4e0c7_yofpof.jpg",
        available: true,
    },
    {
        slug: "office-chair-3",
        name: "Оффис Сандал",
        price: "₮400,000",
        imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851611/0050fd0dac735ed9d02f0a370ee23629_jdskuc.jpg",
        available: true,
    },
    {
        slug: "office-chair-4",
        name: "Оффис Сандал",
        price: "₮385,000",
        imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851611/910cf650c38767dd48acaa39786ebd09_h7epnj.jpg",
        available: true,
    },
    {
        slug: "office-chair-5",
        name: "Оффис Сандал",
        price: "₮375,000",
        imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1750851611/be9258e84d4fadc02ba3fb31b9bdfd64_k8saxt.jpg",
        available: true,
    },
    {
        slug: "training-chair-black",
        name: "Сургалтын сандал (Хар)",
        price: "₮150,000",
        imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1750854362/e85a6b3f7fd1ee09a4d2989f050f3d64_1_qmeycj.jpg",
        available: true,
    },
    {
        slug: "office-table",
        name: "Оффис Ширээ",
        price: "₮380,000",
        imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748864027/69b525492207e6f404341e8887e3b810_kgaxp2.jpg",
        available: true,
    },
    {
        slug: "guest-table",
        name: "Зочны Ширээ",
        price: "₮380,000",
        imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748864027/44a9f1298c471d1b9fb86fb41e97c7dd_e1gqzd.jpg",
        available: false,
    },
    {
        slug: "dining-table",
        name: "Хоолны Ширээ",
        price: "₮380,000",
        imageUrl: "https://res.cloudinary.com/ddyif81ff/image/upload/v1748864027/84d70df95b56ee8c9ecb5efa78fe6fef_nuuxyg.jpg",
        available: false,
    },
];

export default function ProductPage() {
    const { slug } = useParams();
    const [isOpen, setIsOpen] = useState(false);

    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center text-center text-lg font-semibold text-red-600">
                Бүтээгдэхүүн олдсонгүй
            </div>
        );
    }

    return (
        <>
            {/* Бүтээгдэхүүний дэлгэрэнгүй */}
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
                <div className="bg-white rounded-xl shadow-lg max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                    {/* Зураг */}
                    <div>
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-auto max-h-[400px] object-contain rounded-lg shadow-sm"
                        />
                    </div>

                    {/* Мэдээлэл */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
                            <p className="text-xl text-blue-600 font-semibold mb-2">{product.price}</p>
                            <p className={`mb-4 font-medium ${product.available ? "text-green-600" : "text-red-500"}`}>
                                {product.available ? "Бэлэн" : "Бэлэн бус"}
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Энэхүү бүтээгдэхүүн нь чанартай, удаан эдэлгээтэй бөгөөд оффис болон гэрийн хэрэглээнд тохиромжтой.
                            </p>
                        </div>

                        <Button
                            size="lg"
                            onClick={() => setIsOpen(true)}
                            className="mt-6 w-full"
                        >
                            Захиалах
                        </Button>
                    </div>
                </div>
            </div>

            {/* Ordermodel Modal */}
            <Ordermodel
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                product={product}
            />
        </>
    );
}
