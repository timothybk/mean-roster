import { FirefightersComponent } from "./firefighters/firefighters.component";
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'firefighters',
    pathMatch: 'full'
  },
  {
    path: 'firefighters',
    component: FirefightersComponent
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
