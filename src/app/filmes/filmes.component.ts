import { FilmesService } from './filmes.service';
import { Filme } from './filme/filme.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

  filmes : Filme[];

  constructor(private filmesService: FilmesService) { }

  ngOnInit(): void {
    this.filmes = this.filmesService.filmes();

  }

}
