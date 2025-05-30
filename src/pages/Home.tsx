import { MovieCard } from "../components/movie-card";
import { Pagination } from "../components/pagination";
import { Loader } from "../components/ui/loader";
import { CreateMovie } from "../components/create-movie";
import { useMovies } from "../hooks/useMovies";
import { Search } from "../assets/icons/search";
import { Input } from "../components/ui/input";
import { useState, useEffect } from "react";
import { FiltersModal } from "../components/filters-modal";
import { useDebounce } from "../hooks/useDebounce";
import type { MovieFilterDto, MovieResponse } from "../types/movie";
import { getMovies } from "../http/movies";

export function Home() {
  const {
    movies,
    meta,
    isLoading,
    isFetching,
    setFilters: setMovieFilters,
    setPage: setMoviePage,
  } = useMovies();
  const [searchTitle, setSearchTitle] = useState("");
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<MovieFilterDto>({
    page: 1,
    limit: 10,
  });
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

  const debouncedSearch = useDebounce(searchTitle, 500);

  useEffect(() => {
    if (debouncedSearch) {
      setFilters({ title: debouncedSearch });
    }
  }, [debouncedSearch, setFilters]);

  useEffect(() => {
    setMovieFilters({
      page: 1,
      limit: 10
    });
    getMovies({
      page: 1,
      limit: 10
    })
  }, []);

  const handleApplyFilters = (newFilters: MovieFilterDto) => {
    const updatedFilters = {
      ...newFilters,
      page: 1,
      limit: 10,
      title: searchTitle
    };

    setFilters(updatedFilters);
    setPage(1);
    setMovieFilters(updatedFilters);
    setMoviePage(1);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newFilters = {
      page: 1,
      limit: 10,
      title: searchTitle
    };
    
    setFilters(newFilters);
    setPage(1);
    setMovieFilters(newFilters);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setMoviePage(newPage);
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-mauve-dark-100">
        <Loader className="w-8 h-8" />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col gap-8 p-6 max-w-[1322px] mx-auto">
      <div className="flex items-center justify-end gap-2.5 md:flex-row flex-col  bg-reds-500">
        <div className="flex max-w-[640px] relative justify-end items-center w-full">
          <form
            onSubmit={handleSearch}
            className="relative w-full max-w-[600px]"
          >
            <Input
              placeholder="Pesquise por filmes"
              className="w-full px-4 py-2.5"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
            />
          </form>
          <Search
            fill="#B5B2BC"
            className="absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>
        <div className="flex gap-3 w-full md:w-fit">
          <FiltersModal
            open={isFiltersModalOpen}
            onOpenChange={setIsFiltersModalOpen}
            onApplyFilters={handleApplyFilters}
            initialFilters={filters}
          />
          <CreateMovie />
        </div>
      </div>

      {isFetching && (
        <div className="fixed inset-0 flex items-center justify-center bg-mauve-dark-100/50 backdrop-blur-sm">
          <Loader className="w-8 h-8" />
        </div>
      )}

      {movies.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-mauve-dark-1100">Nenhum filme encontrado.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-[#EBEAF8]/8 backdrop-blur-sm p-6 rounded">
            {movies.map((movie: MovieResponse) => (
              <div className="max-w-[300px] w-full mx-auto">
                <MovieCard key={movie.id} movie={movie} />
              </div>
            ))}
          </div>

          <Pagination
            currentPage={page}
            totalPages={meta.totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}
