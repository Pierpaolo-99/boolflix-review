import { createContext, useContext, useState, useEffect } from "react";

const FetchContext = createContext();

export function FetchProvider({ children }) {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [findMovie, setFindMovie] = useState("")

    const api_key = import.meta.env.VITE_API_KEY

    function movieFetch() {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${findMovie}&language=it-IT`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer 07b1f9d20b379faacf359e2d18efcb85'
            }
        })
            .then(res => res.json())
            .then(moviesData => {
                setMovies(moviesData.results)
            })
    }

    function seriesFetch() {
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${findMovie}&language=it-IT`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer 07b1f9d20b379faacf359e2d18efcb85'
            }
        })
            .then(res => res.json())
            .then(seriesData => {
                setSeries(seriesData.results)
            })
            .catch(error => console.error("Error fetching series:", error));
    }

    useEffect(() => {
        if (findMovie.trim() !== "") {
            movieFetch();
            seriesFetch();
        }
    }, [findMovie])

    return (
        <FetchContext.Provider
            value={{
                movies,
                series,
                findMovie,
                setFindMovie
            }}
        >
            {children}
        </FetchContext.Provider>
    )
}

export function useFetch() {
    return useContext(FetchContext);
}