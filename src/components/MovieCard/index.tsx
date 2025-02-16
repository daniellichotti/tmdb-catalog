import { useNavigate } from "react-router-dom";
import { Movie } from "../../@types/Movie";
import StarRating from "../StarRating";

export interface Props {
  movie: Movie;
}

export default function MovieCard(props: Props) {
  const navigate = useNavigate(); // Hook do react-router-dom para navegação
  const movie = props.movie;

  const handleClick = () => {
    // Navegar para a outra página e passar o objeto no state
    navigate("/details", { state: { movie } });
  };

  return (
    <li className="w-full h-full rounded-xl overflow-hidden relative hover:cursor-pointer group">
      <div className="">
        <img
          className="w-full h-full object-cover opacity-100 group-hover:opacity-50 transition-opacity duration-300"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className="absolute bottom-0 bg-[linear-gradient(to_bottom,_#00000000,_#00000090)] h-52 w-full flex flex-col justify-end p-2.5">
        <p className="text-slate-50 text-sm mb-1.5">{movie.title}</p>
        {movie.vote_average > 0 && <StarRating rating={movie.vote_average} />}
        <div
          className={`text-slate-50 text-sm mt-2 h-0 opacity-0 group-hover:opacity-100 transition-all duration-600 ${
            movie.overview ? "group-hover:h-24" : "h-12"
          }`}
        >
          {movie.overview && (
            <p>
              {movie.overview.length > 100
                ? `${movie.overview.substring(0, 80)}...`
                : movie.overview}
            </p>
          )}
          <button
            onClick={handleClick}
            className="rounded-sm mt-2.5 px-1.5 py-2 text-primary bg-blue-600 border-0 cursor-pointer w-full"
          >
            Ver mais
          </button>
        </div>
      </div>
    </li>
  );
}
