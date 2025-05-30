import { useQuery } from "@tanstack/react-query";
import { getMovieById } from "../http/movies";

export function useMovieDetails(id: string) {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieById(id),
    enabled: !!id,
  });
} 