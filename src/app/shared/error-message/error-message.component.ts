import { Component, Input } from '@angular/core';
import { FormValidations } from '../form-validations';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [],
  templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent {
  // @Input() msgErro: string;
  // @Input() mostrarErro: boolean;

  @Input() control!: FormControl<any>;
  @Input() label!: string;
  ngOnInit() {
    console.log(this.label, 'inicializado');
  }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        return FormValidations.getErrorMsg(
          this.label,
          propertyName,
          this.control.errors[propertyName]
        );
      }
    }
    return null;
  }
}
