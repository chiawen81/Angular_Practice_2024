import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'test',
    loadComponent: () => import('./components/test-angular-element/test-angular-element.component').then(m => m.TestAngularElementComponent)
  }
];
