import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Curso, CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cursos.component.html',
})
export class CursosComponent {
  listaCursos: Curso[] = [];
  constructor(private cursosService: CursosService) {
    this.listaCursos = this.cursosService.getCursos();
  }
}
