// Vercel funksiyası: sayt açılanda son videonu yoxlamaq üçün.
// Nəticə 1 saat keşdə saxlanılır ki, YouTube-a hər ziyarətdə müraciət olunmasın.
import { sonVideo } from '../src/youtube';

export async function GET() {
  const video = await sonVideo();
  return Response.json(video, {
    status: video ? 200 : 502,
    headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
  });
}
