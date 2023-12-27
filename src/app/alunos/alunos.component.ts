import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './alunos.component.html',
})
export class AlunosComponent {
  alunos: any[] = [];
  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.alunos = this.alunosService.getAllAlunos();
    this.route.params.subscribe((params) => {
      console.log(params);
    });
  }
}
