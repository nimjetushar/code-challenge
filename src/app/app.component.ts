import { Component } from '@angular/core';
import { SearchCriteria } from './interfaces/app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  searchCriteria: SearchCriteria;

  searchFilter(data: SearchCriteria) {
    this.searchCriteria = Object.assign({}, data);
  }
}
