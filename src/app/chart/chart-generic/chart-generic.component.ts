import { Component, OnInit, Input } from '@angular/core';
import { ShowTooltip } from '../types';
import { DefaultTooltipGenerator } from '../tooltip-generators/defaultTooltipGenerator';

@Component({
  selector: 'app-chart-generic',
  templateUrl: './chart-generic.component.html',
  styleUrls: ['./chart-generic.component.css']
})
export class ChartGenericComponent implements OnInit {
  
  constructor(private generator: DefaultTooltipGenerator) { }

  @Input() data: any;

  get tooltipContent() {
    return this.generator.createTooltip(this.data);
  }

  ngOnInit() {
  }

}
