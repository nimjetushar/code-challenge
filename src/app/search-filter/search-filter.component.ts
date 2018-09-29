import { Component, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { NgForm } from '@angular/forms';

import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import { InputDebounceTimer, Cities } from '../constant/app.constant';
import { SearchCriteria } from '../interfaces/app.interface';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements AfterViewInit {

  @ViewChild('originCity') originCity: NgForm;
  @ViewChild('destinationCity') destinationCity: NgForm;

  @Output() searchData = new EventEmitter<SearchCriteria>();

  isOneWay = true;
  datePickerOptions: IMyDpOptions;
  returnDate: any;
  deptDate: any;
  priceRange = 10000;
  originCityList: string[] = [];
  destinationCityList: string[] = [];

  private cityList = Cities;

  constructor() {
    this.datePickerOptions = {
      dateFormat: 'dd/mm/yyyy',
    };
  }

  ngAfterViewInit(): void {
    this.originCity.control.valueChanges
      .debounceTime(InputDebounceTimer)
      .distinctUntilChanged()
      .subscribe(data => {
        this.originCityList = this.getFilteredList(data);
      });

    this.destinationCity.control.valueChanges
      .debounceTime(InputDebounceTimer)
      .distinctUntilChanged()
      .subscribe(data => {
        this.destinationCityList = this.getFilteredList(data);
      });
  }

  selectCity(itm: string, model: string) {
    this[model].control.setValue(itm);
    this.originCityList = [];
    this.destinationCityList = [];
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

  searchCriteria(form: NgForm): void {
    const data = form.value,
      searchCriteria: SearchCriteria = {
        departurenDate: data.departurenDate && data.departurenDate.formatted,
        returnDate: data.returnDate && data.returnDate.formatted,
        originCity: data.originCity,
        destinationCity: data.destinationCity,
        isOneWay: this.isOneWay,
        noPassenger: data.noPassenger,
        priceRange: this.priceRange
      };
    this.searchData.emit(searchCriteria);
  }

  private getFilteredList(data: string): string[] {
    if (!data) { return []; }
    const str = data.toLowerCase();
    const cityList = this.cityList.filter(city => (city.includes(str) && city !== str));
    return Object.assign([], cityList);
  }
}
