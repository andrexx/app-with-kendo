import { Component, AfterViewInit } from '@angular/core';

import * as $ from 'jquery';
import '@progress/kendo-ui/js/kendo.dropdownlist.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'app';

  ngAfterViewInit(): void {
    console.log('before call');
    (<any>$('#color')).kendoDropDownList();
  }
}
