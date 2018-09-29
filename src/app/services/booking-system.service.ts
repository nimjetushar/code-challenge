import { Injectable } from '@angular/core';
import { FlightDetail, SearchCriteria } from '../interfaces/app.interface';

declare var require: any;
declare var moment: any;

@Injectable()
export class BookingSystemService {

  private flightDetails: FlightDetail[] = require('../../assets/dummyData.json').flight_data;

  constructor() { }

  fetchFlightData(searchCriteria: SearchCriteria) {
    const from = searchCriteria.departurenDate;
  }

}
