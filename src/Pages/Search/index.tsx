import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Movie } from "../../@types/Movie";
import MovieCard from "../../components/MovieCard";

const SearchPage = () => {
  const { query } = useParams(); // Captura o valor da URL
  const [movie, setMovie] = useState<Movie[]>([]);

  const getMovie = async () => {
    await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/search/movie",
      params: {
        api_key: "23f6d28f9a3a1b1b865a71755a063805",
        query: query,
        language: "pt-BR",
      },
    }).then((response) => {
      setMovie(response.data.results);
    });
  };

  useEffect(() => {
    getMovie();
  }, [query]);

  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4 list-none w-full p-6">
      {movie.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default SearchPage;
