export async function mostPopularAnime() {
    try {
        const res = await fetch(`https://api.jikan.moe/v4/anime`);
        const data = await res.json();
        const animes = data.data.filter(anime => anime.score > 7).slice(0,-1);
        return animes.map(anime => ({
            id: anime.mal_id,
            title: anime.title,
            backdrop: anime.images.webp.image_url,
            broadcast: anime.broadcast,
            duration: anime.duration,
            episodes: anime.episodes,
            status: anime.status,
            score: anime.score,
            synopsis: anime.synopsis
        }));
    } catch (error) {
        console.error(error);
        return []; // Devuelve un array vacío en caso de error
    }
}
