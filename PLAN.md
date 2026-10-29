# Şəxsi sayt: plan

## Məqsəd
İnsan sayta girən kimi kim olduğumu öyrənsin. Sayt sakit, sadə və oxunaqlı olsun.
İlham mənbəyi: leerob.com.

## Görünüş
- Tək, dar sütun (~600px), mərkəzdə
- Tünd fon, açıq mətn; serif şrift (kitab hissi)
- Rəng yoxdur, yalnız boz tonlar; linklər alt xətlə
- Şəkil, animasiya, menyu yoxdur
- Dil: yalnız azərbaycanca

## Ana səhifənin quruluşu (yuxarıdan aşağı)
1. **@ad**: başlıq
2. **Bio**: 2 abzas, kim olduğum və nə etdiyim
3. **Layihələr**: siyahı (ad, bir cümlə, link)
4. **Yazılar**: başlıq və ay/il, ən yenisi yuxarıda
5. **Əlaqə**: email və sosial linklər bir sətirdə

Hər yazı üçün ayrıca sadə səhifə olacaq.

## Necə idarə edəcəm (ən vacib hissə)
Bütün məzmun adi mətn fayllarındadır, kod bilmək lazım deyil:

```
melumat/
  bio.md          ← haqqımda mətni
  elaqe.md        ← email, sosial linklər
  layiheler.md    ← layihələr siyahısı
yazilar/
  ilk-yazi.md     ← hər yazı bir fayl
```

- **Yazı paylaşmaq:** `yazilar/` qovluğuna yeni `.md` faylı əlavə et → sayt özü yenilənir
- **Layihə və ya əlaqəni dəyiş:** müvafiq faylı aç, mətni dəyiş, saxla
- Faylları GitHub saytında birbaşa brauzerdən əlavə etmək və dəyişmək olar, terminal lazım deyil

## Texniki tərəf
- **Astro**: sadə statik sayt, çox sürətli
- **GitHub**: fayllar burada saxlanılır
- **Vercel**: pulsuz hostinq, hər dəyişiklikdən sonra avtomatik yenilənir
- **Domen**: sonra qoşulur

## Mərhələlər
1. Mətnləri hazırlamaq: bio, layihələr, əlaqə
2. Saytı qurmaq və yoxlamaq
3. GitHub və Vercel-ə yükləmək
4. Domeni qoşmaq

## Açıq suallar
- Saytda görünəcək ad/handle: `@therealmartinezzz`?
- Domen var, yoxsa alınmalıdır?
- Köhnə saytdan nəsə götürülməlidir?
