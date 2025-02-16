import axios from "axios";
import { useEffect, useState } from "react";
import { Movie } from "../../@types/Movie";
import MovieCard from "../MovieCard";

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [selectedGenre, setSelectedGenre] = useState<number>();
  const [genres, setGenres] = useState([]);

  const getMovies = async () => {
    await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "23f6d28f9a3a1b1b865a71755a063805",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovies(response.data.results);
    });

    setIsLoading(false);
  };

  const getGenres = async () => {
    await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/genre/movie/list",
      params: {
        api_key: "23f6d28f9a3a1b1b865a71755a063805",
        language: "pt-BR",
      },
    }).then((response) => {
      setGenres(response.data.genres);
    });
  };
  console.log(genres);

  useEffect(() => {
    getMovies();
    getGenres();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center items-center h-screen">
          <div className="w-16 h-16 border-4 border-t-4 border-amber-50 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 list-none w-full p-6">
      {movies
        .filter((movie) =>
          selectedGenre ? movie.genre_ids.includes(selectedGenre) : true
        )
        .map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </ul>
  );
}
