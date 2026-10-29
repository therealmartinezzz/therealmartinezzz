# Saytı necə idarə etmək

Kod bilmək lazım deyil. Bütün məzmun bu iki qovluqdadır:

| Nə etmək istəyirsən | Hansı fayl |
| --- | --- |
| Adı və ya bio-nu dəyişmək | `melumat/bio.md` |
| "Hazırda nə edirəm" sətrini dəyişmək | `melumat/bio.md`-də `indi:` sətri |
| Şəkli dəyişmək | Şəkli `public/` qovluğuna at (məs. `sekil.jpg`), sonra `melumat/bio.md`-də `sekil: "/sekil.jpg"` yaz |
| Layihə əlavə etmək və ya silmək | `melumat/layiheler.md` |
| "Alətlərim" səhifəsini dəyişmək | `melumat/aletler.md` (`##` ilə bölmə, `- **Ad** — izah` ilə alət) |
| Maraqlı faktları dəyişmək | `melumat/faktlar.md` (hər sətir `- ` ilə başlayır) |
| Əlaqə linklərini dəyişmək | `melumat/elaqe.md` |
| Sağdakı slayda şəkil əlavə etmək və ya silmək | `public/sehneler/` qovluğu (fayl adına görə sıralanır: 1.jpg, 2.jpg...) |
| Yeni yazı paylaşmaq | `yazilar/` qovluğuna yeni `.md` faylı |

## Yeni yazı

`yazilar/` qovluğunda yeni fayl yarat, məsələn `ilk-fikirlerim.md`. Faylın adı yazının linki olacaq. Faylın içi belə olmalıdır:

```
---
basliq: "Yazının başlığı"
tarix: 2026-11-01
---

Mətn buradan başlayır.
```

## Layihə

`melumat/layiheler.md` faylında hər sətir bir layihədir:

```
- [Layihənin adı](https://link.com) — bir cümlə ilə nə olduğu
```

## Əlaqə linkləri

`melumat/elaqe.md` faylında hər link iki sətirdir. İkon linkin ünvanına görə özü seçilir (Email, Instagram, YouTube, X, LinkedIn, TikTok, GitHub):

```
  - ad: TikTok
    url: https://www.tiktok.com/@ad
```

## Kompüterdə baxmaq

```
npm run dev
```

Sonra brauzerdə `http://localhost:4321` ünvanını aç.
