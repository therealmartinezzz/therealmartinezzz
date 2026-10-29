// Vercel funksiyası: sayt açılanda son videonu yoxlamaq üçün.
// Nəticə 1 saat keşdə saxlanılır ki, YouTube-a hər ziyarətdə müraciət olunmasın.
// Vercel funksiyaları src/ qovluğundan import edə bilmir, ona görə məntiq burada təkrarlanır
// (src/youtube.ts ilə eynidir).
const KANAL = 'https://www.youtube.com/@therealmartinezzz';

async function sonVideo() {
  try {
    const sehife = await fetch(`${KANAL}/videos`, {
      headers: { 'accept-language': 'en', 'user-agent': 'Mozilla/5.0' },
    });
    const id = (await sehife.text()).match(/"videoId":"([\w-]{11})"/)?.[1];
    if (!id) return null;

    const url = `https://www.youtube.com/watch?v=${id}`;
    const melumat = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`);
    const { title } = await melumat.json();

    return { id, basliq: title, url, sekil: `https://i.ytimg.com/vi/${id}/mqdefault.jpg` };
  } catch {
    return null;
  }
}

export async function GET() {
  const video = await sonVideo();
  return Response.json(video, {
    status: video ? 200 : 502,
    headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
  });
}
