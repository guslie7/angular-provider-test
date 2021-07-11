import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnotherOneComponent } from './another-one/another-one.component';
import { RouterModule } from '@angular/router';
import { ChartModule } from '../chart/chart.module';

@NgModule({
  declarations: [AnotherOneComponent],
  imports: [
    CommonModule,
    ChartModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: AnotherOneComponent
      }
    ])
  ]
})
export class LazynessModule { }
