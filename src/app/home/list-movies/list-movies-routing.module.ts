import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListMoviesComponent } from './list-movies.component';

const routes: Routes = [
  {
    path: "",
    component: ListMoviesComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListMoviesRoutingModule { }
