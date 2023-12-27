import { Component, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-aluno-detalhe',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './aluno-detalhe.component.html',
})
export class AlunoDetalheComponent implements OnDestroy {
  aluno: any;
  subscription!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunosService
  ) {}
  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      this.aluno = this.alunoService.getAlunoById(params['id']);
    });
    console.log(this.aluno);
  }

  ngOnDestroy(): void {
    console.log('Component is about to be destroyed!');
    this.subscription.unsubscribe();
    // Clean up resources, subscriptions, etc.
  }

  destroyComponent(): void {
    this.router.navigate(['/alunos', this.aluno]);
  }


  handleClick() {
    this.router.navigate([`/alunos/${this.aluno.id}/editar`]);
  }
}
