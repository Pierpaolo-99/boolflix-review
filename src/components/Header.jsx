import { useFetch } from "../context/FetchContext";
import { NavLink } from "react-router-dom";
import './Header.css';

export default function Header() {

    const { findMovie, setFindMovie } = useFetch();

    return (
        <>
            <header className="header">
                <div className="container d-flex align-items-center justify-content-between">
                    <h1 className="logo">Boolflix</h1>
                    <nav className="navigation">
                        <ul className="nav-list d-flex">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/'}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/film'}>Film</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/serie-tv'}>Serie Tv</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="actions d-flex">
                        <form className="input-group">
                            <NavLink to={'/SearchPage'} className="nav-link">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="SearchBar"
                                    id="SearchBar"
                                    aria-label="Cerca un film o una serie TV"
                                    placeholder="Cerca un film o una serie TV..."
                                    value={findMovie}
                                    onChange={(e) => setFindMovie(e.target.value)}
                                />
                            </NavLink>
                        </form>

                    </div>
                </div>
            </header>
        </>
    )
}