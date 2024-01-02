import { Component, Input } from '@angular/core';
import { FormValidations } from '../form-validations';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [],
  template: `<span class="text-danger">{{ errorMessage }}</span>`,
})
export class ErrorMessageComponent {
  @Input() control!: FormControl<any>;
  @Input() label!: string;

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        (this.control.touched || this.control.dirty)
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
