import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../app/modules/home/home.component').then(c => c.HomeComponent),
    pathMatch: 'full'
  },
  {
    path: '**',
    loadComponent: () => import('../app/modules/error/error.component').then(c => c.ErrorComponent),
  }
];
