import MovieCard from "../components/MovieCard"
import { useState } from "react";
import '../css/Home.css'

function Home() {
    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        { id: 1, title: "Free Guy", release_date: "2024" },
        { id: 2, title: "Jhon weak", release_date: "2024" },
        { id: 3, title: "Avatar", release_date: "2020" }
    ];

    const handleSearch = (e) =>{
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text"
            placeholder="Search the movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
             />

             <button className="search-button" type="submit">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map((movie) => (
                movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />
                )
            ))}
        </div>
    </div>
 
}

export default Home