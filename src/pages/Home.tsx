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

export function Home() {
  const { movies, meta, isLoading, isFetching, setFilters, setPage } =
    useMovies();
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");

  const debouncedSearch = useDebounce(searchTitle, 500);

  useEffect(() => {
    if (debouncedSearch) {
      setFilters({ title: debouncedSearch });
    }
  }, [debouncedSearch, setFilters]);

  const handleApplyFilters = (filters: MovieFilterDto) => {
    setFilters(filters);
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
      <div className="flex items-center justify-end gap-2.5">
        <div className="flex max-w-[640px] relative justify-end items-center w-full">
          <Input
            placeholder="Pesquise por filmes"
            className="w-full px-4 py-2.5 max-w-[600px]"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
          <Search
            fill="#B5B2BC"
            className="absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>
        <div className="flex gap-3">
          <FiltersModal
            open={isFiltersOpen}
            onOpenChange={setIsFiltersOpen}
            onApplyFilters={handleApplyFilters}
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
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          <Pagination
            currentPage={meta.page}
            totalPages={meta.totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
}
