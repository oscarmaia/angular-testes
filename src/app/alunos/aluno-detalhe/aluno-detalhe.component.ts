import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  standalone: true,
  imports: [],
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
      console.log(this.aluno);
    });
  }

  ngOnDestroy(): void {
    debugger
    console.log('Component is about to be destroyed!');
    this.subscription.unsubscribe();
    // Clean up resources, subscriptions, etc.
  }

  destroyComponent(): void {
    // Destroy the component
    this.router.navigate(['/alunos']);
  }
}
