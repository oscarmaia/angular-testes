import { Injectable } from '@angular/core';

export type Curso = { id: number; nome: string; inscricoes: number };
@Injectable({
  providedIn: 'root',
})
export class CursosService {
  cursos: Curso[] = [
    { id: 1, nome: 'Angular', inscricoes: 13 },
    { id: 2, nome: 'HTML', inscricoes: 12 },
    { id: 3, nome: 'CSS', inscricoes: 21 },
    { id: 4, nome: 'JavaScript', inscricoes: 3 },
  ];
  constructor() {}
  getCursos() {
    return this.cursos;
  }
  getCursoById(id: number): Curso | null {
    for (let curso of this.cursos) {
      if (curso.id == id) {
        return curso;
      }
    }
    return null;
  }
}
