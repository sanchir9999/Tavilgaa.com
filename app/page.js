import Container from "./components/Container";
import DiscountPopup from "./components/DiscountPopup";

export const metadata = {
  title: "Оффис Тавилга, Gaming Сандал, Ширээ | Монголд Хямд Үнэ, Чанартай",
  description: "🏢 Оффис тавилга, gaming сандал, компьютерын ширээ сандал Монголд. ✅ Эргономик дизайн ✅ Чанартай материал ✅ Хямд үнэ ✅ 24 цагт хүргэлт Улаанбаатарт. 100+ төрлийн бүтээгдэхүүн. Одоо захиалга өгөөрэй!",
  keywords: "оффис тавилга, оффис сандал, оффис ширээ, gaming сандал, компьютерын сандал, эргономик сандал, ширээ сандал, тавилга улаанбаатар, хямд тавилга",
  openGraph: {
    title: "Оффис Тавилга, Gaming Сандал, Ширээ | Монголд Хямд Үнэ",
    description: "🏢 Оффис тавилга, gaming сандал, ширээ Монголд. Эргономик дизайн, чанартай материал, хямд үнэ. 24 цагт хүргэлт.",
  },
};

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tavilgaa.com",
    "url": "https://tavilgaa.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tavilgaa.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Нүүр",
        "item": "https://tavilgaa.com"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="h-full m-auto flex flex-col justify-between bg-[#d5dede] min-h-screen">

        <Container />
        <DiscountPopup />

      </div>
    </>
  );
}
