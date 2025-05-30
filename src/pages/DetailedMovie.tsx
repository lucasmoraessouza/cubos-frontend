import { useParams } from "react-router";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { Loader } from "../components/ui/loader";
import { Button } from "../components/ui/button";
import { EditMovie } from "../components/edit-movie";

export function DetailedMovie() {
  const { id } = useParams();
  const { data: movie, isLoading } = useMovieDetails(id as string);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!movie) return null;

  return (
    <div className="relative min-h-screen w-full bg-mauve-dark-100 pb-16">
      <div className="flex justify-end gap-2 absolute right-8 top-8 z-10">
        <EditMovie movie={movie} />
        <Button
          variant="primary"
          className=" text-mauve-dark-1200 hover:bg-red-500/80"
          onClick={() => {
            /* Lógica para deletar */
          }}
        >
          Deletar
        </Button>
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
        }}
      />

      <div className="mx-auto max-w-[1322px] px-8">
        <div className="relative -mt-[550px] flex gap-8 flex-col md:flex-row">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="flex flex-col gap-1">
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
              className="h-[542px] w-[374px] rounded-[4px] object-cover"
            />
          </div>

          <div className="flex flex-1 gap-8 items-center md:flex-row flex-col">
            <div className="flex w-[426px] flex-col gap-6">
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
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-x-8 gap-y-4">
              <div className="col-span-3 grid grid-cols-2 gap-x-8">
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
              </div>

              <div className="col-span-3 grid grid-cols-2 gap-x-8">
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
              </div>

              <div className="col-span-3 grid grid-cols-2 gap-x-8">
                <div className="rounded-lg bg-mauve-dark-300/60 p-4 backdrop-blur-sm">
                  <span className="text-mauve-dark-1100 font-serrat font-semibold text-[12px] ">
                    SITUAÇÃO
                  </span>
                  <div className="text-mauve-dark-1100 font-serrat text-[16px] font-normal">
                    Lançado
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
