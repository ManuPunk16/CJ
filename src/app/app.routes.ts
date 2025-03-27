import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../app/modules/home/home.component').then(c => c.HomeComponent),
    pathMatch: 'full'
  },
  {
    path: 'quienes-somos',
    loadComponent: () => import('../app/shared/components/quiensomos/quiensomos.component').then(c => c.QuiensomosComponent),
  },
  {
    path: 'noticias-locales',
    loadComponent: () => import('../app/shared/components/local-news/local-news.component').then(c => c.LocalNewsComponent)
  },
  {
    path: 'noticias-locales/:id',
    loadComponent: () => import('../app/shared/components/news-details/news-details.component').then(c => c.NewsDetailComponent)
  },
  {
    path: 'noticias-nacionales',
    loadComponent: () => import('../app/shared/components/national-news/national-news.component').then(c => c.NationalNewsComponent)
  },
  {
    path: 'noticias-nacionales/:id',
    loadComponent: () => import('../app/shared/components/news-details/news-details.component').then(c => c.NewsDetailComponent)
  },
  // {
  //   path: '',
  //   loadComponent: () => import('').then(c => c.),
  // },
  {
    path: '**',
    loadComponent: () => import('../app/modules/error/error.component').then(c => c.ErrorComponent),
  }
];
