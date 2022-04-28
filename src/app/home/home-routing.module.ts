import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { HomeTemplateComponent } from './home-template/home-template.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: HomeTemplateComponent
      },
      {
        path: "news",
        component: NewsComponent
      },
      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: "list-movies",
        loadChildren: () => import('./list-movies/list-movies.module').then(x => x.ListMoviesModule)
      },
      {
        path: "detail-movie/:id",
        loadChildren: () => import('./detail-movie/detail-movie.module').then(x => x.DetailMovieModule)
      },
      {
        path: "list-seats",
        loadChildren: () => import('./list-seats/list-seats.module').then(x => x.ListSeatsModule)
      },
      {
        path: "register",
        loadChildren: () => import('./register/register.module').then(x => x.RegisterModule)
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
