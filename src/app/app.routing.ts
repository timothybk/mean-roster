import { PostsComponent } from './posts/posts.component';
import { Routes, RouterModule } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
