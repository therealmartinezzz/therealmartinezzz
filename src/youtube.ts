// YouTube kanalının ünvanı. Kanal dəyişsə, yalnız bunu dəyiş.
const KANAL = 'https://www.youtube.com/@therealmartinezzz';

export interface Video {
  id: string;
  basliq: string;
  url: string;
  sekil: string;
}

// Kanalın "Videos" səhifəsindən son videonu tapır (Shorts daxil deyil).
// YouTube-un RSS feed-i işləmədiyi üçün səhifənin özündən oxuyuruq.
export async function sonVideo(): Promise<Video | null> {
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
