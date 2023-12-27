import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private alunos: any[] = [
    { id: 1, nome: 'Aluno 1', email: 'email1@gmail.com' },
    { id: 2, nome: 'Aluno 2', email: 'email2@gmail.com' },
    { id: 3, nome: 'Aluno 3', email: 'email3@gmail.com' },
  ];

  getAllAlunos() {
    return this.alunos;
  }
  getAlunoById(id: number) {
    for (let aluno of this.alunos) {
      if (aluno.id == id) {
        return aluno;
      }
    }
  }
}
