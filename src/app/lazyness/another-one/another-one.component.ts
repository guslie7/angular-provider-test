import { Component, OnInit } from '@angular/core';
import { DefaultTooltipGenerator } from 'src/app/chart/tooltip-generators/defaultTooltipGenerator';
import { SpecialTooltipGenerator } from 'src/app/chart/tooltip-generators/specialTooltipGenerator';
import { MoreThanSpecialTooltipGenerator } from 'src/app/chart/tooltip-generators/moreThanSpecialTooltipGenerator';

@Component({
  selector: 'app-another-one',
  templateUrl: './another-one.component.html',
  styleUrls: ['./another-one.component.css'],
  providers: [
    {
      provide: DefaultTooltipGenerator,
      useClass: MoreThanSpecialTooltipGenerator
    }
  ]
})
export class AnotherOneComponent implements OnInit {

  dataObj = {
    column: 'COLUNA',
    row: {
      count: 55,
      label: 'wow'
    },
    twist: [1,2,3]
  };

  constructor() { }

  ngOnInit() {
  }

}
