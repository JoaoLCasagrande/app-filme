import { Injectable } from '@angular/core';
import { Filme } from './filme/filme.model';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  rests: Filme[] = [
    {
      id: 'matrix',
      nome: 'Matrix',
      categoria: 'Ficção Científica',
      data: 'Ano: 1994',
      direcao: 'Direção: Lana Wachowski, Lilly Wachowski',
      tempo: '136 min',
      nota: 8.0,
      imagePath: 'assets/img/filmes/Matrix.JPG',
    },

    {
      id: 'rei-leao',
      nome: 'Rei Leão',
      categoria: 'Infantil/Animação/Drama',
      data: 'Ano: 1994',
      direcao: 'Direção: Roger Allers, Rob Minkoff',
      tempo: '89 min',
      nota: 8.0,
      imagePath: 'assets/img/filmes/ReiLião.jpg',
    },
    {
      id: 'invocacao',
      nome: 'Invocação do Mal',
      categoria: 'Terror/Thriller',
      data: 'Ano: 2013',
      direcao: 'Direção: James Wan',
      tempo: '112 min',
      nota: 7.4,
      imagePath: 'assets/img/filmes/Invocacao.jpg',
    },

    {
      id: 'velozes_furiosos',
      nome: 'Velozes e Furiosos',
      categoria: 'Ação/Crime/Suspense',
      data: '2001',
      direcao: 'Rob Cohen',
      tempo: '106 min',
      nota: 6.8,
      imagePath: 'assets/img/filmes/Velozes_e_Furiosos.jpg',
    },

    {
      id: 'magnatas',
      nome: 'Magnatas do Crime',
      categoria: 'Ação/Crime',
      data: '2019',
      direcao: 'Guy Ritchie',
      tempo: '113 min',
      nota: 7.4,
      imagePath: 'assets/img/filmes/Magnatas.jpg',
    },

    {
      id: 'joao_maria',
      nome: 'João e Maria: Caçadores de Bruxas',
      categoria: 'Fantasia/Terror/Ação',
      data: '2013',
      direcao: 'Tommy Wirkola',
      tempo: '88 min',
      nota: 5.7,
      imagePath: 'assets/img/filmes/JãoEMaria.jpg',
    },

    {
      id: 'ultimato',
      nome: 'Vingadores: Ultimato',
      categoria: 'Aventura/Ficção Científica/Ação',
      data: '2019',
      direcao: 'Joe Russo, Anthony Russo',
      tempo: '181 min',
      nota: 8.7,
      imagePath: 'assets/img/filmes/Ultimato.jpg',
    },

    {
      id: 'distrito',
      nome: '13° Distrito',
      categoria: 'Ação/Crime',
      data: '2009',
      direcao: 'Patrick Alessandrin',
      tempo: '101 min',
      nota: 6.0,
      imagePath: 'assets/img/filmes/13°.jpg',
    },
  ];

  constructor() {}

  filmes() : Filme[]{
    return this.rests;
  }
}
