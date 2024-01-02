import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  standalone: true,
  imports: [],
  template: ``,
})
export abstract class BaseFormComponent {
  fb = inject(FormBuilder);
  form!: FormGroup;
  private formSubmitAtempt!: boolean;

  abstract submit(): void;

  onSubmit() {
    this.formSubmitAtempt = true;
    if (this.form.valid) {
      this.submit();
    } else {
      this.verificaValidacoesForm(this.form);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach((campo) => {
      const controle = formGroup.get(campo);
      controle!.markAsDirty();
      controle!.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  // isFieldValid(field: string) {
  //   if (field) {
  //     return (
  //       (this.form.get(field)!.valid && this.form.get(field)!.touched) ||
  //       (this.form.get(field)!.untouched && this.formSubmitAtempt)
  //     );
  //   } else {
  //     return console.log('entrou no else');
  //   }
  // }

  // aplicaCssErro(field: string) {
  //   if (field) {
  //     console.log(this.form.get(field));
  //     console.log(this.isFieldValid(field));
  //     return {
  //       'has-error': this.isFieldValid(field),
  //       'has-feedback': this.isFieldValid(field),
  //     };
  //   } else {
  //     return console.log('entrou no else');
  //   }
  // }

  resetar() {
    this.form.reset();
    this.formSubmitAtempt = false;
  }
  getCampo(campo: string) {
    return this.form.get(campo);
  }
}
