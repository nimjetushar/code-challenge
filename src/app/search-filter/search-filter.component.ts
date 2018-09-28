import { Component } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent {

  isOneWay: boolean;
  datePickerOptions: IMyDpOptions;
  returnDate: any;
  deptDate: any;
  priceRange: number;

  constructor() {
    this.isOneWay = true;
    this.datePickerOptions = {
      dateFormat: 'dd.mm.yyyy',
    };
  }

  /**
   *
   *
   * @param {boolean} tab
   * @memberof SearchFilterComponent
   */
  switchTab(tab: boolean): void {
    this.isOneWay = tab;
  }

  searchCriteria(data): void {
    console.log(data)
  }

}
