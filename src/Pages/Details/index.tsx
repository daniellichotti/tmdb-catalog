import { useLocation } from "react-router-dom";
import StarRating from "../../components/StarRating";

export interface MovieDetail {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  backdrop_path: string;
  genre_ids: number[];
}

export default function MovieDetails() {
  const location = useLocation();
  const { movie } = location.state as { movie: MovieDetail }; // Captura o objeto movie do state
  console.log(movie);
  return (
    <div className="flex items-center justify-center mt-30">
      <div className="w-full h-full flex items-center justify-center p-5">
        <img
          className="rounded-2xl"
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
        />
      </div>
      <div className="flex flex-col w-full h-full justify-center items-center p-5 gap-2">
        <h1 className="text-4xl">
          {movie.title} ({movie.original_title})
        </h1>
        <div>
          <p>{movie.release_date.replace(/-/g, "/")}</p>
          <p>{movie.genre_ids}</p>
        </div>
        <p>{movie.overview}</p>
        <div className="flex items-center justify-center gap-2">
          {movie.vote_average > 0 && <StarRating rating={movie.vote_average} />}{" "}
          ({movie.vote_count})
        </div>
      </div>
    </div>
  );
}
