import { useFetch } from '../context/FetchContext';

export default function SearchPage() {

    const { movies, series } = useFetch();

    return (
        <>
            <main className='container my-4 main-content'>
                <div className="row">
                    {movies.map(movie => (
                        <div className="col-md-3 mb-4" key={movie.id}>
                            <div className="card h-100 card-hover">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className='card-img-top'
                                />
                                <div className="card-body card-info">
                                    <h4 className="card-title">{movie.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                    {series.map(serie => (
                        <div className="col-md-3 mb-4" key={serie.id}>
                            <div className="card h-100 card-hover">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                                    alt={serie.name}
                                    className='card-img-top'
                                />
                                <div className="card-body card-info">
                                    <h4 className="card-title">{serie.name}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}