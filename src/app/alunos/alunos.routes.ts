import { Routes } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

export const ALUNOS_ROUTES: Routes = [
  {
    path: '',
    component: AlunosComponent,
    children: [
      { path: 'novo', component: AlunoFormComponent },
      { path: ':id', component: AlunoDetalheComponent },
      {
        path: ':id/editar',
        component: AlunoFormComponent,
        canDeactivate: [
          () => {
            confirm('Quer trocar de rota?');
          },
        ],
      },
    ],
  },
  //   { path: ':id/editar', component: AlunoFormComponent },
];
