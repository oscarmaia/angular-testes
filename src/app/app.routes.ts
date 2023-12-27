import { Router, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TesteComponent } from './teste/teste.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { authGuard } from './guards/auth-guard';
import { inject } from '@angular/core';

export const routes: Routes = [
  { path: '', canActivate: [authGuard], component: HomeComponent },
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
    canActivate: [authGuard],
    loadChildren: () =>
      import('./cursos/cursos.routes').then((r) => r.CURSO_ROUTES),
  },
  {
    path: 'alunos',
    canActivate: [
      (e: any, x: any) => {
        console.log(e);
        console.log(x);
        return true;
      },
    ],
    loadChildren: () =>
      import('./alunos/alunos.routes').then((r) => r.ALUNOS_ROUTES),
  },

  { path: '**', component: NotFoundComponent },
];
