import { Injectable } from '@angular/core';
import { FlightDetail, SearchCriteria } from '../interfaces/app.interface';

declare var require: any;
declare var moment: any;

@Injectable()
export class BookingSystemService {

  private flightDetails: FlightDetail[] = require('../../assets/dummyData.json').flight_data;

  constructor() { }

  fetchFlightData(searchCriteria: SearchCriteria = <any>{}) {
    const departure = searchCriteria.departurenDate,
      from = searchCriteria.originCity && searchCriteria.originCity.toLowerCase(),
      to = searchCriteria.destinationCity && searchCriteria.destinationCity.toLowerCase(),
      price = searchCriteria.priceRange;

    const filteredFlight = this.flightDetails.filter(flight => {
      const deptDate = this.extractDate(flight.departure);
      return (departure === deptDate && flight.from === from && flight.to === to && price >= flight.price);
    });

    let returnFlight = [];
    if (!searchCriteria.isOneWay) {
      const returnDate = searchCriteria.returnDate;
      returnFlight = this.flightDetails.filter(flight => {
        const deptDate = this.extractDate(flight.departure);
        return (returnDate === deptDate && flight.from === to && flight.to === from && price >= flight.price);
      });
    }

    return filteredFlight.concat(returnFlight);
  }

  private extractDate(date: any): string {
    return moment(date).format('DD/MM/YYYY');
  }
}
