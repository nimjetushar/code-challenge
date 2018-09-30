import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TimePipe } from './pipe/time.pipe';
import { FlightListComponent } from './flight-list/flight-list.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule } from '@angular/forms';
import { ToastModule, ToastsManager } from 'ng2-toastr';
import { ViewContainerRef } from '@angular/core';
import { BookingSystemService } from './services/booking-system.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SearchFilterComponent,
        FlightListComponent,
        TimePipe
      ],
      imports: [
        MyDatePickerModule,
        FormsModule,
        ToastModule.forRoot(),
        NoopAnimationsModule
      ],
      providers: [
        ToastsManager,
        ViewContainerRef,
        BookingSystemService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Flight Search Engine');
  }));
});
