import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterComponent } from './search-filter.component';
import { MyDatePickerModule } from 'mydatepicker';
import { ToastModule, ToastsManager, ToastOptions } from 'ng2-toastr';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchFilterComponent', () => {
  let component: SearchFilterComponent;
  let fixture: ComponentFixture<SearchFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFilterComponent],
      imports: [
        MyDatePickerModule,
        FormsModule,
        ToastModule,
        NoopAnimationsModule
      ],
      providers: [ToastsManager, ToastOptions]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('save to be disabled', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.fields-section .btn.btn-primary').disabled).toBeFalsy();
  }));
});
