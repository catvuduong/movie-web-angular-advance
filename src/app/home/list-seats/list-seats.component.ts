import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { SeatComponent } from './seat/seat.component';

@Component({
  selector: 'app-list-seats',
  templateUrl: './list-seats.component.html',
  styleUrls: ['./list-seats.component.scss']
})
export class ListSeatsComponent implements OnInit {
  // @ViewChildren(SeatComponent) tagListGhe: QueryList:<SeatComponent>;
  @ViewChildren(SeatComponent) tagSeats !: QueryList<SeatComponent>;

  seatArr = [
    { number: 1, name: "số 1", price: 100, status: false },
    { number: 2, name: "số 2", price: 100, status: false },
    { number: 3, name: "số 3", price: 100, status: false },
    { number: 4, name: "số 4", price: 100, status: false },
    { number: 5, name: "số 5", price: 100, status: false },
    { number: 6, name: "số 6", price: 100, status: false },
    { number: 7, name: "số 7", price: 100, status: false },
    { number: 8, name: "số 7", price: 100, status: false },
    { number: 9, name: "số 9", price: 100, status: false },
    { number: 10, name: "số 10", price: 100, status: false },
    { number: 11, name: "số 11", price: 100, status: false },
    { number: 12, name: "số 12", price: 100, status: false },
    { number: 13, name: "số 13", price: 100, status: false },
    { number: 14, name: "số 14", price: 100, status: false },
    { number: 15, name: "số 15", price: 100, status: false },
    { number: 16, name: "số 16", price: 100, status: false },
    { number: 17, name: "số 17", price: 100, status: false },
    { number: 18, name: "số 18", price: 100, status: false },
    { number: 19, name: "số 19", price: 100, status: false },
    { number: 20, name: "số 20", price: 100, status: false },
    { number: 21, name: "số 21", price: 100, status: false },
    { number: 22, name: "số 22", price: 100, status: false },
    { number: 23, name: "số 23", price: 100, status: false },
    { number: 24, name: "số 24", price: 100, status: false },
    { number: 25, name: "số 25", price: 100, status: false },
    { number: 26, name: "số 26", price: 100, status: false },
    { number: 27, name: "số 27", price: 100, status: false },
    { number: 28, name: "số 28", price: 100, status: false },
    { number: 29, name: "số 29", price: 100, status: false },
    { number: 30, name: "số 30", price: 100, status: true },
    { number: 31, name: "số 31", price: 100, status: false },
    { number: 32, name: "số 32", price: 100, status: false },
    { number: 33, name: "số 33", price: 100, status: false },
    { number: 34, name: "số 34", price: 100, status: false },
    { number: 35, name: "số 35", price: 100, status: false },
  ];
  seatingList: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  pickSeat(objectSeat: any) {
    if (objectSeat.status) {
      this.seatingList = [...this.seatingList, objectSeat.seat];
    } else {
      let index = this.seatingList.findIndex(seat => seat.number === objectSeat.seat.number);
      this.seatingList.splice(index, 1);
    }

  }

  cancleSeat(index: number, number: number) {
    this.seatingList.splice(index, 1);
    this.tagSeats.map(item => {
      if (item.seat.number === number) {
        item.statusOfSeat = false;
      }
    })
  }

}
