import { Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { CursoComponent } from './curso/curso.component';
import { CursoNaoEncontradoComponent } from './curso/curso-nao-encontrado/curso-nao-encontrado.component';

export const CURSO_ROUTES: Routes = [
  {
    path: '',
    component: CursosComponent,
  },
  {
    path: 'nao-encontrado',
    component: CursoNaoEncontradoComponent,
  },
  {
    path: ':id',
    component: CursoComponent,
  },
];
