import { Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { CertidoesTabsComponent } from './certidoes-tabs/certidoes-tabs.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: AppHomeComponent, },
  { path:'certidoes', title: 'Certidoes', component: CertidoesTabsComponent, }
];
