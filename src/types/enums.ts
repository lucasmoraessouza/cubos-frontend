export enum Genre {
  ACAO = 'ACAO',
  AVENTURA = 'AVENTURA',
  COMEDIA = 'COMEDIA',
  DRAMA = 'DRAMA',
  TERROR = 'TERROR',
  FICCAO_CIENTIFICA = 'FICCAO_CIENTIFICA'
}

export enum OriginalLanguage {
  EN = 'en',
  PT = 'pt',
  ES = 'es',
  FR = 'fr'
} 
  export const genreLabels: Record<Genre, string> = {
    [Genre.ACAO]: "Ação",
    [Genre.AVENTURA]: "Aventura",
    [Genre.COMEDIA]: "Comédia",
    [Genre.DRAMA]: "Drama",
    [Genre.TERROR]: "Terror",
    [Genre.FICCAO_CIENTIFICA]: "Ficção Científica",
  };

  export const languageLabels: Record<OriginalLanguage, string> = {
    [OriginalLanguage.EN]: "Inglês",
    [OriginalLanguage.PT]: "Português",
    [OriginalLanguage.ES]: "Espanhol",
    [OriginalLanguage.FR]: "Francês",
  };
