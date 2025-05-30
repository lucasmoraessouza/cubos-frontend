import { movies, type Movie } from "../mocks/movies";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search } from "../assets/icons/search";
import { ArrowLeft } from "../assets/icons/arrow-left";
import { ArrowRight } from "../assets/icons/arrow-right";

export function Home() {
  return (
    <div className="flex-1 flex flex-col gap-8 p-6 max-w-[1322px] mx-auto">
      <div className="flex items-center justify-end gap-2.5">
        <div className="flex max-w-[640px] relative justify-end items-center w-full">
          <Input
            placeholder="Pesquise por filmes"
            className="w-full px-4 py-2.5 max-w-[600px]"
          />
          <Search
            fill="#B5B2BC"
            className="absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>
        <div className="flex gap-3">
          <button className="bg-purple-dark-a200 px-5 py-2.5 rounded-[2px] text-mauve-dark-1200">
            Filtros
          </button>
          <Button variant="primary">Adicionar Filme</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-[#EBEAF8]/8 backdrop-blur-sm p-6 rounded">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-auto">
        <Button variant="primary" size="sm" disabled>
          <ArrowLeft stroke="#eae6fdb6" />
        </Button>
        <Button variant="primary" size="sm" disabled>
          1
        </Button>
        <Button variant="primary" size="sm">
          2
        </Button>
        <Button variant="primary" size="sm">
          3
        </Button>
        <Button variant="primary" size="sm">
          4
        </Button>
        <Button variant="primary" size="sm">
          5
        </Button>
        <Button variant="primary" size="sm">
          <ArrowRight stroke="#FFF" />
        </Button>
      </div>
    </div>
  );
}

interface MovieCardProps {
  movie: Movie;
}

function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="relative group cursor-pointer">
      {/* Imagem do filme */}
      <div className="aspect-[2/3] rounded-sm overflow-hidden">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Título e informações - alterna visibilidade e posição no hover */}
      <div className="absolute inset-0 transition-opacity duration-300">
        {/* Container do título - visível quando não hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          <h3 className="font-serrat text-[#eeeeee] font-semibold text-[16px] leading-tight uppercase line-clamp-2">
            {movie.title}
          </h3>
        </div>

        {/* Overlay com rating, título e gêneros - visível apenas no hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Rating circle */}
          {typeof movie.rating === "number" && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <svg width={140} height={140} className="block">
                  <circle
                    cx={70}
                    cy={70}
                    r={65}
                    stroke="#22223A"
                    strokeWidth={10}
                    fill="rgba(0,0,0,0.7)"
                  />
                  <circle
                    cx={70}
                    cy={70}
                    r={65}
                    stroke="#FFD600"
                    strokeWidth={10}
                    fill="none"
                    strokeDasharray={2 * Math.PI * 65}
                    strokeDashoffset={
                      2 * Math.PI * 65 * (1 - movie.rating / 100)
                    }
                    strokeLinecap="round"
                    style={{ transition: "stroke-dashoffset 0.3s" }}
                  />
                </svg>
                <span
                  className="absolute text-yellow-400 font-bold text-3xl left-1/2 top-1/2"
                  style={{ transform: "translate(-50%, -60%)" }}
                >
                  {movie.rating}
                  <span className="text-white text-xl font-normal align-top">
                    %
                  </span>
                </span>
              </div>
            </div>
          )}

          {/* Título e gêneros na parte inferior */}
          <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
            <h3 className="font-serrat text-[#eeeeee] font-semibold text-[16px] leading-tight uppercase line-clamp-2">
              {movie.title}
            </h3>
            <div className="text-[#eeeeee]/60 text-sm">
              {movie.genres.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
