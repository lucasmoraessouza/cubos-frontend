import { api } from './api';
import type { CreateMovieRequest, MovieResponse, UploadResponse, MovieListResponse, MovieFilterDto } from '../types/movie';

export async function uploadFile(file: File): Promise<UploadResponse> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await api.post<UploadResponse>('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
}

export async function createMovie(data: CreateMovieRequest): Promise<MovieResponse> {
  const response = await api.post<MovieResponse>('/movies', data);
  return response.data;
}

export const getMovies = async (filters: MovieFilterDto) => {
  const response = await api.get<MovieListResponse>('/movies', { params: filters });
  return response.data;
};

export async function getMovieById(id: string): Promise<MovieResponse> {
  const response = await api.get<MovieResponse>(`/movies/${id}`);
  return response.data;
}

export const updateMovie = async (id: string, data: any) => {
  const response = await api.put(`/movies/${id}`, data);
  return response.data;
}; 

