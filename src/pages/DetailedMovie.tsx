import { useParams } from "react-router";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { Loader } from "../components/ui/loader";
import { EditMovie } from "../components/edit-movie";
import { useQueryClient } from "@tanstack/react-query";
import { DeleteMovieModal } from "../components/delete-modal";
import { genreLabels } from "../types/enums";

export function DetailedMovie() {
  const { id } = useParams();
  const { data: movie, isLoading } = useMovieDetails(id as string);
  const queryClient = useQueryClient();
  
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-mauve-dark-100">
        <Loader className="w-8 h-8" />
      </div>
    );
  }

  if (!movie) return null;

  return (
    <div className="relative min-h-screen w-full bg-mauve-dark-100 pb-16">
      <div className=" justify-end gap-2 absolute right-8 top-8 z-10 hidden lg:flex">
        <EditMovie
          movie={movie}
          onSuccess={() => {
            queryClient.invalidateQueries({ queryKey: ["movie", id] });
          }}
        />
        <DeleteMovieModal movieId={movie.id} movieTitle={movie.originalTitle} />
      </div>

      <div
        className="h-[603px] w-full bg-cover bg-center"
        style={{
          background: `linear-gradient(
            -45deg,
            rgba(18, 17, 19, 1) 0%,
            rgba(18, 17, 19, 0.46) 49%,
            rgba(18, 17, 19, 1) 100%
          ), url(${movie.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="mx-auto max-w-[1322px] px-8">
        <div className="relative -mt-[600px] flex gap-4 lg:gap-8 flex-col lg:flex-row">
          <div className="lg:flex-col gap-4 items-center lg:items-start flex-row justify-center">
            <div className=" flex-col gap-1 hidden lg:flex">
              <h1 className="font-serrat text-[32px] text-mauve-dark-1200">
                {movie.portugueseTitle}
              </h1>
              <p className="font-serrat text-[16px] font-light text-mauve-dark-1200">
                Título original: {movie.originalTitle}
              </p>
            </div>
            <img
              src={movie.imageUrl}
              alt={movie.originalTitle}
              className="max-h-[542px] lg:w-[374px] rounded-[4px] object-cover w-full"
            />
          </div>

          <div className="flex flex-col lg:flex-row flex-1 gap-8 items-center">
            <div className="flex w-full lg:w-[426px] flex-col gap-6">
              <div className="flex flex-col gap-1  lg:hidden">
                <h1 className="font-serrat text-[32px] text-mauve-dark-1200">
                  {movie.portugueseTitle}
                </h1>
                <p className="font-serrat text-[16px] font-light text-mauve-dark-1200">
                  Título original: {movie.originalTitle}
                </p>
              </div>
              <div className="lg:hidden justify-end gap-2 flex">
                <EditMovie
                  movie={movie}
                  onSuccess={() => {
                    queryClient.invalidateQueries({ queryKey: ["movie", id] });
                  }}
                />
                <DeleteMovieModal
                  movieId={movie.id}
                  movieTitle={movie.originalTitle}
                />
              </div>

              <div className="rounded-[4px] bg-mauve-dark-300/60 p-4 backdrop-blur-sm">
                <span className="text-mauve-dark-1100 font-serrat font-semibold text-[16px] ">
                  SINOPSE
                </span>
                <p className="max-h-[200px] overflow-auto text-mauve-dark-1100 font-serrat text-[16px] font-normal">
                  {movie.synopsis}
                </p>
              </div>

              <div className="rounded-[4px] bg-mauve-dark-300/60 p-4 backdrop-blur-sm">
                <span className="text-mauve-dark-1100 font-serrat font-semibold text-[12px] ">
                  GÊNEROS
                </span>
                <div className="flex gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre}
                      className="rounded-[2px] bg-purple-dark-a200 p-2 font-serrat text-[12px] font-normal text-mauve-dark-1200"
                    >
                      {genreLabels[genre]}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full">
              <div className="rounded-lg bg-mauve-dark-300/60 p-4 backdrop-blur-sm">
                <span className="text-mauve-dark-1100 font-serrat font-semibold text-[12px] ">
                  POPULARIDADE
                </span>
                <div className="text-mauve-dark-1100 font-serrat text-[16px] font-normal">
                  {movie.popularity.toLocaleString()}
                </div>
              </div>

              <div className="rounded-lg bg-mauve-dark-300/60 p-4 backdrop-blur-sm">
                <span className="text-mauve-dark-1100 font-serrat font-semibold text-[12px] ">
                  VOTOS
                </span>
                <div className="text-mauve-dark-1100 font-serrat text-[16px] font-normal">
                  {movie.voteCount.toLocaleString()}
                </div>
              </div>

              <div className="rounded-lg bg-mauve-dark-300/60 p-4 backdrop-blur-sm">
                <span className="text-mauve-dark-1100 font-serrat font-semibold text-[12px] ">
                  LANÇAMENTO
                </span>
                <div className="text-mauve-dark-1100 font-serrat text-[16px] font-normal">
                  {new Date(movie.releaseDate).toLocaleDateString()}
                </div>
              </div>

              <div className="rounded-lg bg-mauve-dark-300/60 p-4 backdrop-blur-sm">
                <span className="text-mauve-dark-1100 font-serrat font-semibold text-[12px] ">
                  DURAÇÃO
                </span>
                <div className="text-mauve-dark-1100 font-serrat text-[16px] font-normal">
                  {`${Math.floor(movie.duration / 60)}h ${
                    movie.duration % 60
                  }m`}
                </div>
              </div>

              <div className="rounded-lg bg-mauve-dark-300/60 p-4 backdrop-blur-sm">
                <span className="text-mauve-dark-1100 font-serrat font-semibold text-[12px] ">
                  SITUAÇÃO
                </span>
                <div className="text-mauve-dark-1100 font-serrat text-[16px] font-normal">
                  {new Date() >= new Date(movie.releaseDate)
                    ? "Lançado"
                    : "Em breve"}
                </div>
              </div>

              <div className="rounded-lg bg-mauve-dark-300/60 p-4 backdrop-blur-sm">
                <span className="text-mauve-dark-1100 font-serrat font-semibold text-[12px] ">
                  IDIOMA
                </span>
                <div className="text-mauve-dark-1100 font-serrat text-[16px] font-normal">
                  {movie.originalLanguage === "en"
                    ? "Inglês"
                    : movie.originalLanguage}
                </div>
              </div>

              <div className="rounded-lg bg-mauve-dark-300/60 p-4 backdrop-blur-sm  flex-wrap">
                <span className="text-mauve-dark-1100 font-serrat font-semibold text-[12px] ">
                  ORÇAMENTO
                </span>
                <div className="text-mauve-dark-1100 font-serrat text-[16px] font-normal">
                  ${(movie.budget / 1000000).toFixed(1)}M
                </div>
              </div>

              <div className="rounded-lg bg-mauve-dark-300/60 p-4 backdrop-blur-sm">
                <span className="text-mauve-dark-1100 font-serrat font-semibold text-[12px] ">
                  RECEITA
                </span>
                <div className="text-mauve-dark-1100 font-serrat text-[16px] font-normal">
                  ${(movie.revenue / 1000000).toFixed(1)}M
                </div>
              </div>

              <div className="rounded-lg bg-mauve-dark-300/60 p-4 backdrop-blur-sm">
                <span className="text-mauve-dark-1100 font-serrat font-semibold text-[12px] ">
                  LUCRO
                </span>
                <div className="text-mauve-dark-1100 font-serrat text-[16px] font-normal">
                  ${((movie.revenue - movie.budget) / 1000000).toFixed(1)}M
                </div>
              </div>
            </div>
          </div>
        </div>

        {movie.trailerUrl && (
          <div className="my-8">
            <span className="mb-6 text-2xl font-bold text-white">Trailer</span>
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <iframe
                src={movie.trailerUrl.replace("watch?v=", "embed/")}
                title={`${movie.originalTitle} Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
