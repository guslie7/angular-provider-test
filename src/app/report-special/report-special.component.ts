import { Component, OnInit } from '@angular/core';
import { DefaultTooltipGenerator } from '../chart/tooltip-generators/defaultTooltipGenerator';
import { SpecialTooltipGenerator } from '../chart/tooltip-generators/specialTooltipGenerator';

@Component({
  selector: 'app-report-special',
  templateUrl: './report-special.component.html',
  styleUrls: ['./report-special.component.css'],
  providers: [
    {
      provide: DefaultTooltipGenerator,
      useClass: SpecialTooltipGenerator
    }
  ]
})
export class ReportSpecialComponent implements OnInit {

  dataObj = {
    column: '1',
    row: {
      count: 12,
      label: 'omega'
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
