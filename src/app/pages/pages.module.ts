import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Modules
import { FormsModule } from '@angular/forms';

// Extra Modules
import { ChartsModule } from 'ng2-charts';

// Custom modules
import { SharedModule } from '../shared/shared.module';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

// Routes
import { PAGES_ROUTES } from './pages.routes';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonutComponent } from '../components/grafico-donut/grafico-donut.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonutComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule,
    SharedModule,
    PAGES_ROUTES
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonutComponent
  ]
})
export class PagesModule { }
