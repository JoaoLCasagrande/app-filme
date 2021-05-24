import { FilmeComponent } from './filmes/filme/filme.component';
import { FilmesComponent } from './filmes/filmes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'sobre', component: SobreComponent},
  {path:'filmes', component: FilmesComponent},
  {path:'filme', component: FilmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
