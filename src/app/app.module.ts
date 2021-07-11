import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReportSpecialComponent } from './report-special/report-special.component';
import { RouterModule } from '@angular/router';
import { ChartModule } from './chart/chart.module';

@NgModule({
  declarations: [
    AppComponent,
    ReportSpecialComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    RouterModule.forRoot([
      {
        path: 'rota-massa',
        loadChildren: () => import('./external-lazy/external-lazy.module').then((m) => m.ExternalLazyModule)
      },
      {
        path: 'rota-segunda',
        loadChildren: () => import('./lazyness/lazyness.module').then((m) => m.LazynessModule)
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
