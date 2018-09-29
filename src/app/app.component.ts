import { Component, ViewContainerRef } from '@angular/core';
import { SearchCriteria } from './interfaces/app.interface';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private toastr: ToastsManager,
    vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  searchCriteria: SearchCriteria;

  searchFilter(data: SearchCriteria) {
    this.searchCriteria = Object.assign({}, data);
  }
}
