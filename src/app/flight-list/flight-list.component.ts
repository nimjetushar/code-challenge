import { Component, Input } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { SearchCriteria, FlightDetail } from './../interfaces/app.interface';
import { BookingSystemService } from '../services/booking-system.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent {

  isOneWay: boolean;
  showError: boolean;
  flightResult: Array<FlightDetail>;
  errMsg = 'Please search the filght';

  private _searchCriteria: SearchCriteria = <any>{};

  @Input() set searchCriteria(data: SearchCriteria) {
    if (data) {
      this.isOneWay = data.isOneWay;
      this.showError = false;
      this._searchCriteria = Object.assign({}, data);
      this.flightResult = this.bookingSystem.fetchFlightData(this.searchCriteria);
      if (!this.flightResult.length) {
        this.showError = true;
        this.errMsg = 'No flight found';
      }
    } else {
      this.showError = true;
    }
  }

  get searchCriteria(): SearchCriteria {
    return this._searchCriteria;
  }

  constructor(private bookingSystem: BookingSystemService,
    private toastr: ToastsManager) { }

  bookTicket() {
    this.toastr.success('Ticket booked successfully', 'Success!');
  }

}
