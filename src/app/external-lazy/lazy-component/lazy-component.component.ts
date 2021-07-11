import { Component, OnInit } from '@angular/core';
import { DefaultTooltipGenerator } from 'src/app/chart/tooltip-generators/defaultTooltipGenerator';
import { LazyTooltipGenerator } from 'src/app/chart/tooltip-generators/lazyTooltipGenerator';

@Component({
  selector: 'app-lazy-component',
  templateUrl: './lazy-component.component.html',
  styleUrls: ['./lazy-component.component.css'],
  providers: [
    {
      provide: DefaultTooltipGenerator,
      useClass: LazyTooltipGenerator
    }
  ]
})
export class LazyComponentComponent implements OnInit {

  dataObj = {
    lazy: false
  }

  constructor() { }

  ngOnInit() {
  }

}
