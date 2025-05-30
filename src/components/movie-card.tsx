import type { MovieResponse } from "../types/movie";
import { useNavigate } from 'react-router';

interface MovieCardProps {
  movie: MovieResponse;
}

export function MovieCard({ movie }: MovieCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      className="relative group cursor-pointer" 
      onClick={() => navigate(`/movies/${movie.id}`)}
    >
      <div className="aspect-[2/3] rounded-sm overflow-hidden">
        <img
          src={movie.imageUrl}
          alt={movie.originalTitle}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="font-serrat text-[#eeeeee] font-semibold text-[16px] leading-tight uppercase line-clamp-2">
            {movie.originalTitle}
          </h3>
        </div>

        <div className="absolute inset-0  opacity-0 group-hover:opacity-100  ">
          {typeof movie.voteCount === "number" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-[140px] h-[140px] rounded-full bg-transparent backdrop-blur-sm" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <span className="text-yellow-400 font-bold text-3xl">
                    {movie.voteCount.toLocaleString()}
                  </span>
                  <div className="text-white text-sm font-normal">votos</div>
                </div>
              </div>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
            <h3 className="font-serrat text-[#eeeeee] font-semibold text-[16px] leading-tight uppercase line-clamp-2">
              {movie.originalTitle}
            </h3>
            <div className="text-[#eeeeee]/60 text-sm">
              {movie.genres.join(", ")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
