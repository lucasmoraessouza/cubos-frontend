export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  rating?: number;
  genres: string[];
  releaseYear: number;
}

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Bumblebee',
    posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fw02ONlDhrYjTSZV8XO6hhU3ds3.jpg',
    rating: 67,
    genres: ['Ação', 'Aventura', 'Ficção Científica'],
    releaseYear: 2018
  },
  {
    id: '2',
    title: 'Capitã Marvel',
    posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
    genres: ['Ação', 'Aventura', 'Ficção Científica'],
    releaseYear: 2019
  },
  {
    id: '3',
    title: 'Alita: Anjo de Combate',
    posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xRWht48C2V8XNfzvPehyClOvDni.jpg',
    genres: ['Ação', 'Aventura', 'Ficção Científica'],
    releaseYear: 2019
  },
  {
    id: '4',
    title: 'Como Treinar o Seu Dragão 3',
    posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg',
    genres: ['Animação', 'Aventura', 'Família'],
    releaseYear: 2019
  },
  {
    id: '5',
    title: 'Aquaman',
    posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jcA2QFJ4wuFcG79P97wA7OBLQoL.jpg',
    genres: ['Ação', 'Aventura', 'Fantasia'],
    releaseYear: 2018
  },
  {
    id: '6',
    title: 'O Menino que Queria Ser Rei',
    posterUrl: 'https://br.web.img3.acsta.net/c_310_420/pictures/18/11/22/12/38/1612692.jpg',
    genres: ['Fantasia', 'Aventura', 'Família'],
    releaseYear: 2019
  },
  {
    id: '7',
    title: 'Megarrromântico',
    posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5xNBYXuv8wqiLVDhsfqCOr75DL7.jpg',
    genres: ['Comédia', 'Romance'],
    releaseYear: 2019
  },
  {
    id: '8',
    title: 'Uma Nova Chance',
    posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/maUMIZVGs8g1hYtq4dQ9Lg9FtVF.jpg',
    genres: ['Comédia', 'Romance'],
    releaseYear: 2018
  },
  {
    id: '9',
    title: 'Homem-Aranha no Aranhaverso',
    posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg',
    genres: ['Animação', 'Ação', 'Aventura'],
    releaseYear: 2018
  },
  {
    id: '10',
    title: 'Máquinas Mortais',
    posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sBdtAsZNVPMOOYcq8zh0XULqU9T.jpg',
    genres: ['Ação', 'Aventura', 'Ficção Científica'],
    releaseYear: 2018
  }
]; 