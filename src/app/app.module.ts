import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import * as moment from 'moment';

import { AppComponent } from './app.component';
import { BookingSystemService } from './services/booking-system.service';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { TimePipe } from './pipe/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterComponent,
    FlightListComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    MyDatePickerModule,
    FormsModule,
    ToastModule.forRoot(),
    NoopAnimationsModule
  ],
  providers: [BookingSystemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
