import { Component, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { IMyDpOptions, IMyDateModel, MyDatePicker } from 'mydatepicker';
import { NgForm } from '@angular/forms';

import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import { InputDebounceTimer, Cities } from '../constant/app.constant';
import { SearchCriteria } from '../interfaces/app.interface';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements AfterViewInit {

  @ViewChild('originCity') originCity: NgForm;
  @ViewChild('destinationCity') destinationCity: NgForm;
  @ViewChild('deptDateC') deptDateC: MyDatePicker;
  @ViewChild('returnDateC') returnDateC: MyDatePicker;

  @Output() searchData = new EventEmitter<SearchCriteria>();

  isOneWay = true;
  returnDateOption: IMyDpOptions;
  deptDateOption: IMyDpOptions;
  returnDate: any;
  deptDate: any;
  priceRange = 10000;
  originCityList: string[] = [];
  destinationCityList: string[] = [];
  expandPanel = true;

  private cityList = Cities;

  constructor(private toastr: ToastsManager) {
    const options = {
      dateFormat: 'dd/mm/yyyy'
    };
    this.returnDateOption = Object.assign({}, options);
    this.deptDateOption = Object.assign({}, options);
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

  dateChange(data: IMyDateModel, status: boolean): void {
    if (status) {
      this.returnDateOption = Object.assign(this.returnDateOption, { disableUntil: data.date });
      if (this.returnDateC && this.returnDate.setOptions) { this.returnDateC.setOptions(); }
    } else {
      this.deptDateOption = Object.assign(this.deptDateOption, { disableSince: data.date });
      this.deptDateC.setOptions();
    }
  }

  selectCity(itm: string, model: string): void {
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

    if (searchCriteria.originCity.toLowerCase() === searchCriteria.destinationCity.toLowerCase()) {
      this.toastr.error(`Origin and destination can't be same`, 'Error!');
      return;
    }
    this.searchData.emit(searchCriteria);
  }

  togglePanel(): void {
    this.expandPanel = !this.expandPanel;
  }

  private getFilteredList(data: string): string[] {
    if (!data) { return []; }
    const str = data.toLowerCase();
    const cityList = this.cityList.filter(city => (city.includes(str) && city !== str));
    return Object.assign([], cityList);
  }
}
