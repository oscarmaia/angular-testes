import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextComponent } from '../shared/inputs/input-text/input-text.component';
import { DebugFormComponent } from '../shared/debug-form/debug-form.component';
import { BaseFormComponent } from '../shared/base-form/base-form.component';
import { FormValidations } from '../shared/form-validations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextComponent, DebugFormComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent extends BaseFormComponent {
  ngOnInit() {
    this.form = this.fb.nonNullable.group({
      username: [
        'oscar',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(35),
        ],
      ],
      password: [null, [Validators.required]],
      _password: [
        null,
        [Validators.required, FormValidations.equalsTo('password')],
      ],
      custom: [null, [Validators.required, Validators.email]],
    });
  }
  override submit(): void {
    console.log(this.form.getRawValue())
  }
}
