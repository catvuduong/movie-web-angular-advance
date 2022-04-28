import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListSeatsComponent } from './list-seats.component';

const routes: Routes = [
  {
    path: "",
    component: ListSeatsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ListSeatsRoutingModule { }
