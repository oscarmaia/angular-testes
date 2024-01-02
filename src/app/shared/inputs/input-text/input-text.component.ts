import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { ErrorMessageComponent } from '../../error-message/error-message.component';
import { FormValidations } from '../../form-validations';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule, FormsModule, ErrorMessageComponent],
  templateUrl: './input-text.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputTextComponent),
      multi: true,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor {
  //TODO
  //Verificar casos de criação sem ID/Label/Type
  @Input() type = 'text';
  @Input() id?: string;
  @Input() label!: string;
  @Input() control!: any;
  protected isDisabled: boolean = false;
  private _value: any;
  get value() {
    return this._value;
  }
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChangeCb(v);
    }
  }
  onChangeCb: (_: any) => void = () => {};
  onTouchedCb: () => void = () => {};

  writeValue(v: any): void {
    this.value = v;
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  //Tem que setar o disable pelo Formulário (disabled: true)
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
