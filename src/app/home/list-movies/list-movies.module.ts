import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesRoutingModule } from './list-movies-routing.module';
import { MovieComponent } from './movie/movie.component';
import { ListMoviesComponent } from './list-movies.component';



@NgModule({
  declarations: [
    ListMoviesComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    ListMoviesRoutingModule
  ]
})
export class ListMoviesModule { }
