"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-gray-200">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(59,130,246,0.12),transparent)]" />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pt-10 md:pt-14">
          <div className="text-center py-8 md:py-14">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Бидний тухай</h1>
            <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              Орчин үеийн оффисын тавилгаар чанар, тав тух, загварыг хүргэнэ.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pb-10 md:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Бидний тухай</h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground">
              Бид оффис, хамтран ажиллах орон зайд зориулсан бат бөх, загварлаг
              тавилгыг оновчтой шийдлээр нийлүүлдэг. Хурдан хүргэлт, найдвартай
              үйлчилгээ нь бидний гол давуу тал.
            </p>
            <ul className="mt-4 space-y-2 text-sm md:text-base">
              <li>• Чанартай материал, удаан хэрэглээ</li>
              <li>• Эргономик шийдэл, тав тух</li>
              <li>• B2B санал, хэмжээст захиалга</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/20" />
            <div className="absolute inset-0 grid place-items-center text-blue-600 dark:text-blue-300 font-semibold">
              Tavilgaa.com
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[{ k: "Жилийн туршлага", v: "5+" }, { k: "Төслүүд", v: "120+" }, { k: "Харилцагчид", v: "300+" }, { k: "Сэтгэл ханамж", v: "98%" }].map((s, i) => (
            <div key={i} className="rounded-xl bg-white dark:bg-gray-800 p-4 shadow-sm text-center">
              <div className="text-2xl font-extrabold">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pb-10 md:pb-14">
        <h3 className="text-xl md:text-2xl font-bold text-center">Бидний үнэт зүйлс</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[{
            t: "Чанар",
            d: "Материал, угсралт, шалгалтыг стандартын дагуу хийдэг.",
          }, {
            t: "Загвар",
            d: "Орчин үеийн минимал хэв маяг, алсын хэрэглээг тооцсон дизайн.",
          }, {
            t: "Үйлчилгээ",
            d: "Хурдан хүргэлт, найдвартай баталгаа, уян захиалгын нөхцөл.",
          }].map((v, i) => (
            <div key={i} className="rounded-2xl bg-white dark:bg-gray-800 p-5 shadow-sm">
              <div className="text-lg font-semibold">{v.t}</div>
              <p className="text-sm text-muted-foreground mt-2">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Info */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pb-10 md:pb-14">
        <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold">Халада Форэвэр ХХК — Компанийн мэдээлэл</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
            <div>
              <div className="text-muted-foreground">Компанийн нэр</div>
              <div className="font-medium">Халада Форэвэр ХХК</div>
            </div>
            <div>
              <div className="text-muted-foreground">Вэб</div>
              <a href="https://tavilgaa.com" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">tavilgaa.com</a>
            </div>
            <div>
              <div className="text-muted-foreground">Имэйл</div>
              <a href="mailto:info@tavilgaa.com" className="font-medium text-blue-600 dark:text-blue-400 hover:underline">info@tavilgaa.com</a>
            </div>
            <div>
              <div className="text-muted-foreground">Утас</div>
              <div className="font-medium">8817-5658, 9998-3923, 9991-7208</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Дээрх мэдээллийг өөрчлөх шаардлагатай бол надад үнэн зөв утга өгч шинэчлүүлээрэй.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 pb-16">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg md:text-xl font-bold">Төслөө эхлүүлэхэд бэлэн үү?</h4>
            <p className="text-sm text-white/80 mt-1">Хэмжээст захиалга, үнийн санал хүсэхэд бид туслая.</p>
          </div>
          <a href="/quote" className="inline-flex items-center justify-center rounded-full bg-white text-blue-700 font-semibold px-5 py-2 hover:bg-blue-50 transition">
            Санал авах
          </a>
        </div>
      </section>
    </div>
  );
}
