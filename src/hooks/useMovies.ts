import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../http/movies";
import type { MovieFilterDto } from "../types/movie";

export function useMovies() {
  const [filters, setFilters] = useState<MovieFilterDto>({
    page: 1,
    limit: 10,
  });

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["movies", filters],
    queryFn: () => getMovies(filters),
    refetchOnMount: true,
    enabled: true,
    staleTime: 0,
    gcTime: 0,
    initialData: {
      data: [],
      meta: {
        total: 0,
        page: 1,
        limit: 10,
        totalPages: 0,
      },
    },
  });

  return {
    movies: data?.data || [],
    meta: data?.meta || {
      total: 0,
      page: 1,
      limit: 10,
      totalPages: 0,
    },
    isLoading,
    isFetching,
    setFilters,
    setPage: (page: number) => setFilters((prev) => ({ ...prev, page })),
  };
}
