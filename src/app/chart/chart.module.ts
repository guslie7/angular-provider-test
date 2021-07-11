import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartGenericComponent } from './chart-generic/chart-generic.component';
import { DefaultTooltipGenerator } from './tooltip-generators/defaultTooltipGenerator';

@NgModule({
  declarations: [
    ChartGenericComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChartGenericComponent
  ],
  providers: [
    DefaultTooltipGenerator
  ]
})
export class ChartModule { }
