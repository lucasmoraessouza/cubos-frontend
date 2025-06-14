import * as yup from "yup";
import { Genre, OriginalLanguage } from "../types/enums";

export const validationMovieSchema = yup.object().shape({
  originalTitle: yup.string().required("Título original é obrigatório"),
  portugueseTitle: yup.string().required("Título em português é obrigatório"),
  synopsis: yup.string().required("Sinopse é obrigatória"),
  popularity: yup
    .number()
    .required("Popularidade é obrigatória")
    .min(0, "Popularidade deve ser maior que 0"),
  voteCount: yup
    .number()
    .required("Votos é obrigatório")
    .min(0, "Votos deve ser maior que 0"),
  releaseDate: yup.date().required("Data de lançamento é obrigatória"),
  duration: yup
    .number()
    .required("Duração é obrigatória")
    .integer("Deve ser um número inteiro")
    .min(1, "Duração deve ser maior que 0"),
  poster: yup
    .mixed()
    .required("É necessário selecionar uma imagem")
    .test(
      "is-file",
      "É necessário selecionar uma imagem",
      (value) => value instanceof File
    ),
  budget: yup
    .number()
    .required("Orçamento é obrigatório")
    .min(0, "Orçamento deve ser maior que 0"),
  revenue: yup
    .number()
    .required("Receita é obrigatória")
    .min(0, "Receita deve ser maior que 0"),
  originalLanguage: yup
    .string()
    .oneOf(Object.values(OriginalLanguage), "Idioma inválido")
    .required("Idioma original é obrigatório"),
  genres: yup
    .array()
    .of(yup.string().oneOf(Object.values(Genre), "Gênero inválido"))
    .min(1, "Selecione pelo menos um gênero")
    .required("Gêneros são obrigatórios"),
  trailerUrl: yup.string().url("Digite uma URL válida").nullable(),
});

export const initialValuesMovie = {
  originalTitle: "",
  portugueseTitle: "",
  synopsis: "",
  popularity: 0,
  voteCount: 0,
  releaseDate: "",
  duration: 0,
  budget: 0,
  revenue: 0,
  originalLanguage: "" as OriginalLanguage,
  genres: [] as Genre[],
  trailerUrl: "",
  poster: new File([], ""),
};

export const validationUpdateMovieSchema = yup.object().shape({
  originalTitle: yup.string().required("Título original é obrigatório"),
  portugueseTitle: yup.string().required("Título em português é obrigatório"),
  synopsis: yup.string().required("Sinopse é obrigatória"),
  popularity: yup
    .number()
    .required("Popularidade é obrigatória")
    .min(0, "Popularidade deve ser maior que 0"),
  voteCount: yup
    .number()
    .required("Votos é obrigatório")
    .min(0, "Votos deve ser maior que 0"),
  releaseDate: yup.date().required("Data de lançamento é obrigatória"),
  duration: yup
    .number()
    .required("Duração é obrigatória")
    .integer("Deve ser um número inteiro")
    .min(1, "Duração deve ser maior que 0"),
  budget: yup
    .number()
    .required("Orçamento é obrigatório")
    .min(0, "Orçamento deve ser maior que 0"),
  revenue: yup
    .number()
    .required("Receita é obrigatória")
    .min(0, "Receita deve ser maior que 0"),
  originalLanguage: yup
    .string()
    .oneOf(Object.values(OriginalLanguage), "Idioma inválido")
    .required("Idioma original é obrigatório"),
  genres: yup
    .array()
    .of(yup.string().oneOf(Object.values(Genre), "Gênero inválido"))
    .min(1, "Selecione pelo menos um gênero")
    .required("Gêneros são obrigatórios"),
  trailerUrl: yup.string().url("Digite uma URL válida").nullable(),
});