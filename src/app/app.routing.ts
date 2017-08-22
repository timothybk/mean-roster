import { FirefightersComponent } from './firefighters/firefighters.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
  {
    path: 'firefighters',
    component: FirefightersComponent
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
