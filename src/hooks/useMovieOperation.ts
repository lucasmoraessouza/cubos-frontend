import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMovie, uploadFile } from "../http/movies";
import { toast } from "sonner";
import type {
  CreateMovieRequest,
  MovieUpdateRequest,
  MovieResponse,
} from "../types/movie";
import { useState } from "react";
import { api } from "../http/api";

export function useMovieOperations() {
  const queryClient = useQueryClient();
  const [_, setIsLoading] = useState(false);

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
    data: Omit<CreateMovieRequest, "imageUrl"> & {
      poster: File;
    }
  ) => {
    try {
      const uploadResponse = await uploadMutation.mutateAsync(data.poster);

      const { poster, ...movieData } = data;

      await createMovieMutation.mutateAsync({
        ...movieData,
        imageUrl: uploadResponse.url,
      });

      return true;
    } catch (error) {
      return false;
    }
  };

  const updateMovie = async (
    movieData: MovieUpdateRequest,
    newPosterFile?: File
  ): Promise<boolean> => {
    try {
      setIsLoading(true);

      let finalImageUrl = movieData.imageUrl;
      if (newPosterFile && newPosterFile instanceof File) {
        const uploadResponse = await uploadFile(newPosterFile);
        finalImageUrl = uploadResponse.url;
      }

      const response = await api.patch<MovieResponse>(
        `/movies/${movieData.id}`,
        {
          ...movieData,
          imageUrl: finalImageUrl,
        }
      );

      return response.status === 200;
    } catch (error) {
      console.error("Erro ao atualizar filme:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteMovie = async (movieId: string): Promise<boolean> => {
    try {
      setIsLoading(true);

      const response = await api.delete(`/movies/${movieId}`);
      return response.status === 200;
    } catch (error) {
      console.error("Erro ao deletar filme:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    deleteMovie,
    updateMovie,
    createMovie: handleCreateMovie,
    isUploading: uploadMutation.isPending,
    isCreating: createMovieMutation.isPending,
    isLoading: uploadMutation.isPending || createMovieMutation.isPending,
  };
}
