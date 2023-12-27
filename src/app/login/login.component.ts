import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from './auth.service';
import { TesteComponent } from '../teste/teste.component';
import { InputTextComponent } from '../shared/inputs/input-text/input-text.component';
import { DebugFormComponent } from '../shared/debug-form/debug-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TesteComponent,
    InputTextComponent,
    DebugFormComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  fb = inject(FormBuilder);
  loginService = inject(AuthService);
  form: FormGroup = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    custom: ['', Validators.required],
  });

  handleSubmit() {
    const user = this.form.getRawValue();
    this.loginService.signIn(user);
  }
  handleModal() {
    console.log('conteúdo salvo :)');
  }
}
