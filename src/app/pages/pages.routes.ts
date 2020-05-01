import { Routes, RouterModule } from '@angular/router';

// Custom components
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
      { path: 'graficas' , component: Graficas1Component, data: {titulo: 'Gráficas'} },
      { path: 'progress' , component: ProgressComponent, data: {titulo: 'Progress Bar'} },
      { path: 'promesas' , component: PromesasComponent, data: {titulo: 'Promesas'} },
      { path: 'rxjs' , component: RxjsComponent, data: {titulo: 'RxJs Demo'} },
      { path: 'account-settings' , component: AccountSettingsComponent, data: {titulo: 'Ajustes del tema'} },
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
