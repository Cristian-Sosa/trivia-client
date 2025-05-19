import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  {
    path: 'start',
    loadComponent: () => import('./index').then((c) => c.AuthComponent),
  },
  {
    path: 'explanations',
    loadComponent: () => import('./index').then((c) => c.ExplanationComponent),
  },
];
