import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSeatsComponent } from './list-seats.component';
import { SeatComponent } from './seat/seat.component';
import { ListSeatsRoutingModule } from './list-seats-routing.module';



@NgModule({
  declarations: [
    ListSeatsComponent,
    SeatComponent
  ],
  imports: [
    CommonModule,
    ListSeatsRoutingModule
  ]
})
export class ListSeatsModule { }
