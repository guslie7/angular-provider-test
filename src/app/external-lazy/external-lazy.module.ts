import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyComponentComponent } from './lazy-component/lazy-component.component';
import { ChartModule } from '../chart/chart.module';

@NgModule({
  declarations: [
    LazyComponentComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: LazyComponentComponent
      }
    ])
  ]
})
export class ExternalLazyModule {
  constructor() {
    console.log('eae');
  }
}
