import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule } from '@angular/forms';

import * as moment from 'moment';

import { AppComponent } from './app.component';
import { BookingSystemService } from './services/booking-system.service';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { FlightListComponent } from './flight-list/flight-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchFilterComponent,
    FlightListComponent
  ],
  imports: [
    BrowserModule,
    MyDatePickerModule,
    FormsModule
  ],
  providers: [BookingSystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
