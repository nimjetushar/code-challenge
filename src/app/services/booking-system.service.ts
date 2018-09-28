import { Injectable } from '@angular/core';

declare var require: any;

export interface FlightDetail {
  flight_id: number;
  from: string;
  to: string;
  price: number;
  departure: string;
  arrival: string;
}

@Injectable()
export class BookingSystemService {

  private flightDetails: FlightDetail[] = require('../../assets/dummyData.json');

  constructor() {
    console.log(this.flightDetails);
   }

}
