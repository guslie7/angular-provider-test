import { Component } from '@angular/core';
import { DefaultTooltipGenerator } from './chart/tooltip-generators/defaultTooltipGenerator';
import { MoreThanSpecialTooltipGenerator } from './chart/tooltip-generators/moreThanSpecialTooltipGenerator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'angular-teste';
  
  dataObj = {
    column: '1',
    row: {
      count: 12,
      label: 'omega'
    },
    twist: [1,2,3,5]
  };
  
  constructor(private gen: DefaultTooltipGenerator) {
    
  }
}
