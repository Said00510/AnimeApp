import { useRef, useState } from "react";
import { searchAnime } from "../components/services/anime"; 

export function useAnime({value}){
    const[anime, setAnime] = useState([])
    const[loading, setLoading] = useState(false)
    const[error, setError] = useState(null)
    const previusSearch = useRef(value)

    const getAnimes = async ({value}) =>{
        if(value === previusSearch.current) return
        try{
            setLoading(true)
            setError(null)
            previusSearch.current = value
            const newAnimes = await searchAnime({value})
            setAnime(newAnimes)
        }catch(e){
            setError(e.message)
        }finally{
            setLoading(false)
        }
    }

    return{
        anime,
        loading,
        error,
        getAnimes
    }
}