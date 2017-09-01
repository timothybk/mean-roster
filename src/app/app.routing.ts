import { FirefighterDetailComponent } from './firefighters/firefighter-detail/firefighter-detail.component';
import { FirefighterEditComponent } from './firefighters/firefighter-edit/firefighter-edit.component';
import { FirefighterStartComponent } from './firefighters/firefighter-start/firefighter-start.component';
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
  },
  {
    path: 'firefighters',
    component: FirefightersComponent, children: [
      {path: '', component: FirefighterStartComponent},
      {path: 'new', component: FirefighterEditComponent},
      {path: ':id', component: FirefighterDetailComponent},
      {path: ':id/edit', component: FirefighterEditComponent}
    ]
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
