import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  @Input() seat: any;
  @Output() eventSeat = new EventEmitter;
  statusOfSeat: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  pickSeat() {
    this.statusOfSeat = !this.statusOfSeat;
    let objectSeat: any = {
      status: this.statusOfSeat,
      seat: this.seat
    }
    this.eventSeat.emit(objectSeat);
  }

}
