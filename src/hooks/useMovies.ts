import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../http/movies";
import { useState } from "react";
import type { MovieFilterDto } from "../types/movie";

export function useMovies() {
  const [_, setPage] = useState(1);
  const [filters, setFilters] = useState<MovieFilterDto>({
    page: 1,
    limit: 10,
  });

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["movies", filters],
    queryFn: () => getMovies(filters),
    staleTime: 1000 * 60, 
  });

  const handleFilters = (newFilters: MovieFilterDto) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
      page: 1, 
    }));
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    setFilters((prev) => ({
      ...prev,
      page: newPage,
    }));
  };

  return {
    movies: data?.data ?? [],
    meta: data?.meta ?? { total: 0, page: 1, limit: 10, totalPages: 1 },
    isLoading,
    isFetching,
    setFilters: handleFilters,
    setPage: handlePageChange,
  };
}
