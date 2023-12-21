import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Curso, CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso',
  standalone: true,
  imports: [],
  providers: [CursosService],
  templateUrl: './curso.component.html',
})
export class CursoComponent {
  id!: number;
  inscricao: Subscription = new Subscription();
  curso!: Curso;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursosService
  ) {}
  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });
    const curso = this.cursoService.getCursoById(this.id);
    if (curso) {
      this.curso = curso;
    } else {
      this.router.navigate([`${this.id}/nao-encontrado`]);
    }
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
