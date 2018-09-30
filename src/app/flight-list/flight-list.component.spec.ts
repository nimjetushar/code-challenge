import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightListComponent } from './flight-list.component';
import { BookingSystemService } from '../services/booking-system.service';
import { TimePipe } from '../pipe/time.pipe';
import { ToastsManager, ToastOptions } from 'ng2-toastr';

describe('FlightListComponent', () => {
  let component: FlightListComponent;
  let fixture: ComponentFixture<FlightListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightListComponent, TimePipe],
      providers: [BookingSystemService, ToastsManager, ToastOptions]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render search message', async(() => {
    component.searchCriteria = null;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.alert.alert-info.text-center').textContent).toContain('Please search the filght');
  }));

  it('should render error message', async(() => {
    component.searchCriteria = <any>{};
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.alert.alert-info.text-center').textContent).toContain('No flight found');
  }));
});
