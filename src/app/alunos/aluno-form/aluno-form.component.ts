import { AlunosService } from './../alunos.service';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.scss',
})
export class AlunoFormComponent {
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  service = inject(AlunosService);

  form!: FormGroup;

  ngOnInit() {
    let id = undefined;
    this.route.params.subscribe((params) => {
      id = params['id'];
      if (id) {
        const alunoInfo = this.service.getAlunoById(id);
        this.form = this.fb.nonNullable.group({
          name: [alunoInfo.nome, Validators.required],
          email: [alunoInfo.email, Validators.required],
        });
      } else {
        this.form = this.fb.nonNullable.group({
          name: ['', Validators.required],
          email: ['', Validators.required],
        });
      }
    });
  }

  handleSubmit() {
    console.log(this.form);
  }
}
