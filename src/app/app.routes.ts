import { Routes } from '@angular/router';

export const routes: Routes = [
  // redirect root to login (placed first to avoid accidental matches)
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  // fallback: redirect anything else to login
  {
    path: '**',
    redirectTo: 'login',
  },
  {
    path: 'registro',
    loadComponent: () => import('./pages/registro/registro.page').then( m => m.RegistroPage)
  },
];
