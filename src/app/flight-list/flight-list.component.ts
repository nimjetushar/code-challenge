import { Component, OnInit, Input } from '@angular/core';
import { SearchCriteria, FlightDetail } from './../interfaces/app.interface';
import { BookingSystemService } from '../services/booking-system.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {

  isOneWay: boolean;
  showError: boolean;
  flightResult: Array<FlightDetail>;

  private _searchCriteria: SearchCriteria = <any>{};

  @Input() set searchCriteria(data: SearchCriteria) {
    if (data) {
      this.isOneWay = data.isOneWay;
      this.showError = false;
      this._searchCriteria = Object.assign({}, data);
      this.bookingSystem.fetchFlightData(this.searchCriteria);
    } else {
      this.showError = true;
    }
  }

  get searchCriteria(): SearchCriteria {
    return this._searchCriteria;
  }

  constructor(private bookingSystem: BookingSystemService) { }

  ngOnInit() { }

}
