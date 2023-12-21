import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TesteComponent } from './teste/teste.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'teste',
    component: TesteComponent,
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./cursos/cursos.routes').then((r) => r.CURSO_ROUTES),
  },
  {
    path: 'alunos',
    loadChildren: () =>
      import('./alunos/alunos.routes').then((r) => r.ALUNOS_ROUTES),
  },

  { path: '**', component: NotFoundComponent },
];
