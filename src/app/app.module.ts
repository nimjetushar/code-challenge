import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [BookingSystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
