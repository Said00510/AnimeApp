
export async function searchAnime({ value }) {
    try{
        if(value === " ") return
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${value}`)
        const data = await res.json()
        const animes = data.data
        console.log(data)
        return animes?.map((anime) => ({
            id: anime.mal_id,
            title: anime.title,
            backdrop: anime.images.webp.image_url,
            brodcast: anime.broadcast,
            duration: anime.duration,
            episodes: anime.episodes,
            status: anime.status,
            score: anime.score,
            synopsis: anime.synopsis
        }))

    }catch(e){
        console.error(e)
    }

}