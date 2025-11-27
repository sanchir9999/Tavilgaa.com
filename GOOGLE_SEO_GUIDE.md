# 🚀 Google Хайлтанд Харагдах Заавар

## ❌ Одоогийн асуудал:
Таны сайт Google хайлтанд харагдахгүй байна. Шалтгаан нь:
1. Google таны сайтыг хараахан indexed хийгээгүй
2. Sitemap submit хийгээгүй
3. Шинэ domain

---

## ✅ ШИЙДЭЛ - Дараах алхмуудыг дараалалтай хий:

### 📋 Алхам 1: Google Search Console-д бүртгүүлэх (5 минут)

1. **Google Search Console руу оч:**
   ```
   https://search.google.com/search-console
   ```

2. **"Add Property" дар:**
   - URL prefix сонго
   - `https://tavilgaa.com` гэж бичээд Continue

3. **Ownership verify хий:**
   
   **HTML tag** арга сонго. Ийм код өгнө:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ..." />
   ```

4. **Verification code-ийг авч хадгал:**
   - Тэр `ABC123XYZ...` хэсгийг copy хий
   - `app/layout.js` файл дээр:
   
   ```javascript
   verification: {
     google: "ABC123XYZ...", // ЭНД ӨӨРИЙН КОДОО БИЧ
   },
   ```

5. **Deploy хий:**
   ```bash
   git add .
   git commit -m "Add Google verification"
   git push
   ```

6. **2-3 минутын дараа Google Search Console дээр "VERIFY" дар**

---

### 📋 Алхам 2: Sitemap Submit хийх (2 минут)

1. **Google Search Console → Sitemaps**

2. **Sitemap URL оруул:**
   ```
   https://tavilgaa.com/sitemap.xml
   ```

3. **"Submit" дар**

✅ "Success" гэж харуулах ёстой

---

### 📋 Алхам 3: URL Inspection хийх (1 минут)

1. **Google Search Console → URL Inspection**

2. **Таны сайтын URL-уудыг нэг нэгээр нь оруул:**
   ```
   https://tavilgaa.com
   https://tavilgaa.com/category/chairs
   https://tavilgaa.com/category/tables
   ```

3. **"Request Indexing" дар**

Энэ нь Google-д "Одоо миний сайтыг index хий" гэсэн хүсэлт илгээх юм.

---

### 📋 Алхам 4: Бусад хайлтын системд бүртгүүлэх

#### Bing Webmaster Tools:
```
https://www.bing.com/webmasters
```
- Google Search Console-тай холбоорой
- Эсвэл Sitemap submit: `https://tavilgaa.com/sitemap.xml`

#### Yandex:
```
https://webmaster.yandex.com
```

---

## ⏰ Хэр удаан хугацаанд харагдах вэ?

| Арга | Хугацаа |
|------|---------|
| Google Search Console бүртгүүлсний дараа | 24-48 цаг |
| Sitemap submit | 1-7 хоног |
| URL Inspection "Request Indexing" | 1-2 хоног |
| Бүрэн indexed | 2-4 долоо хоног |

---

## 🔍 Таны сайт indexed хийгдсэн эсэхийг шалгах:

Google хайлтанд:
```
site:tavilgaa.com
```

Хэрэв таны сайтын хуудсууд харагдаж эхэлбэл - АМЖИЛТТАЙ! 🎉

---

## 📊 Одоо хийгдсэн SEO сайжруулалтууд:

✅ Meta tags нэмэгдсэн  
✅ Keywords нэмэгдсэн (20+ түлхүүр үгс)  
✅ Sitemap бэлэн (`/sitemap.xml`)  
✅ Robots.txt бэлэн  
✅ Open Graph tags  
✅ Structured data (JSON-LD)  
✅ Semantic HTML (H1, H2, strong tags)  
✅ Mobile-friendly  

---

## 🎯 Хайлтын түлхүүр үгс:

Таны сайт эдгээр үгсээр хайхад харагдах болно:
- ✅ оффис тавилга
- ✅ оффис сандал монгол
- ✅ оффис ширээ улаанбаатар
- ✅ gaming сандал
- ✅ компьютерын сандал
- ✅ ширээ сандал хямд
- ✅ тавилга захиалга
- ✅ эргономик сандал

---

## 🚨 ЧУХАЛ:

**Google Search Console verification code-ийг авч `app/layout.js` файлд ЗААВАЛ нэм!**

Энэгүйгээр Google таныг verify хийж чадахгүй, сайт indexed болохгүй.

---

## 📞 Туслах холбоосууд:

- Google Search Console: https://search.google.com/search-console
- Sitemap URL: https://tavilgaa.com/sitemap.xml
- Robots.txt: https://tavilgaa.com/robots.txt

---

## ✅ Checklist:

- [ ] Google Search Console бүртгүүлсэн
- [ ] Verification code нэмсэн
- [ ] Sitemap submit хийсэн
- [ ] URL Inspection хийсэн
- [ ] 2-4 долоо хоног хүлээх

**Амжилт! 🚀**
