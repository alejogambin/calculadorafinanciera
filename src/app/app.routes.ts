import { Routes } from '@angular/router';

export const routes: Routes = [
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
  {
    path: 'registro',
    loadComponent: () => import('./pages/registro/registro.page').then( m => m.RegistroPage)
  },
  {
    path: 'calculadora',
    loadComponent: () => import('./pages/calculadora/calculadora.page').then( m => m.CalculadoraPage)
  },
  {
    path: 'guardados',
    loadComponent: () => import('./pages/guardados/guardados.page').then( m => m.GuardadosPage)
  },
  {
    path: 'detallecalculomodal',
    loadComponent: () => import('./pages/detallecalculomodal/detallecalculomodal.page').then( m => m.DetallecalculomodalPage)
  },
  {
    path: '**',
    redirectTo: 'login',
  }
];
