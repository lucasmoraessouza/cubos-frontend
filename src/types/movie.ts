import type { Genre, OriginalLanguage } from "./enums";

export interface UploadResponse {
  url: string;
}

export interface CreateMovieRequest {
  originalTitle: string;
  portugueseTitle: string;
  synopsis: string;
  popularity: number;
  voteCount: number;
  duration: number;
  releaseDate: string;
  budget: number;
  revenue: number;
  originalLanguage: OriginalLanguage;
  imageUrl: string;
  genres: Genre[];
  trailerUrl?: string;
}

export interface MovieResponse {
  id: string;
  originalTitle: string;
  portugueseTitle: string;
  synopsis: string;
  popularity: number;
  voteCount: number;
  releaseDate: string;
  duration: number;
  imageUrl: string;
  budget: number;
  revenue: number;
  originalLanguage: OriginalLanguage;
  genres: Genre[];
  createdAt: string;
  updatedAt: string;
  trailerUrl?: string;
}

export interface MovieCreateRequest {
  originalTitle: string;
  portugueseTitle: string;
  synopsis: string;
  popularity: number;
  voteCount: number;
  releaseDate: string;
  duration: number;
  imageUrl: string;
  budget: number;
  revenue: number;
  originalLanguage: OriginalLanguage;
  genres: Genre[];
  trailerUrl?: string;
  
}

export interface MovieUpdateRequest {
  id: string;
  originalTitle: string;
  portugueseTitle: string;
  synopsis: string;
  popularity: number;
  voteCount: number;
  releaseDate: string;
  duration: number;
  imageUrl: string;
  budget: number;
  revenue: number;
  originalLanguage: OriginalLanguage;
  genres: Genre[];
  trailerUrl?: string;
}

export interface MovieListResponse {
  data: MovieResponse[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface MovieFilterDto {
  title?: string;
  minDuration?: number;
  maxDuration?: number;
  startDate?: string;
  endDate?: string;
  page?: number;
  limit?: number;
  genre?: Genre;
  originalLanguage?: OriginalLanguage;
}
