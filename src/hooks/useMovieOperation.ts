import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMovie, uploadFile } from "../http/movies";
import { toast } from "sonner";
import type { CreateMovieRequest } from "../types/movie";

export function useMovieOperations() {
  const queryClient = useQueryClient();

  const uploadMutation = useMutation({
    mutationFn: uploadFile,
    onError: (error: Error) => {
      toast.error("Erro ao fazer upload da imagem");
      console.error(error);
    },
  });

  const createMovieMutation = useMutation({
    mutationFn: createMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["movies"] });
      toast.success("Filme criado com sucesso!");
    },
    onError: (error: Error) => {
      toast.error("Erro ao criar filme");
      console.error(error);
    },
  });

  const handleCreateMovie = async (
    data: Omit<CreateMovieRequest, "imageUrl" | "voteCount"> & { imageUrl: File, voteCount: number }
  ) => {
    try {
      const uploadResponse = await uploadMutation.mutateAsync(data.imageUrl);
      
      const { imageUrl, voteCount, ...movieData } = data;
      
      await createMovieMutation.mutateAsync({
        ...movieData,
        imageUrl: uploadResponse.url,
        voteCount,
      });

      return true;
    } catch (error) {
      return false;
    }
  };

  return {
    createMovie: handleCreateMovie,
    isUploading: uploadMutation.isPending,
    isCreating: createMovieMutation.isPending,
    isLoading: uploadMutation.isPending || createMovieMutation.isPending,
  };
}