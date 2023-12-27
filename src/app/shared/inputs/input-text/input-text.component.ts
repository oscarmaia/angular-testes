import { Component,  HostBinding,  Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [FormsModule],
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
  @Input() type = 'text';
  @Input() id!: string;
  @Input() label!: string;
  @Input() control!: any;
  @Input() isReadOnly = false;

  @HostBinding('attr.blur')
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
  onTouchedCb: (_: any) => void = () => {};

  writeValue(v: any): void {
    this.value = v;
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }
}

// value: any;
// onChange = (value: any) => {};

// onTouched = () => {};

// touched = false;

// disabled = false;

// updateValue(event: any) {
//   this.onChange(event.target.value);
// }
// writeValue(value: string) {
//   this.value = value;
// }

// registerOnChange(onChange: any) {
//   this.onChange = onChange;
// }

// registerOnTouched(onTouched: any) {
//   this.onTouched = onTouched;
// }

// markAsTouched() {
//   console.log('tocado');
//   if (!this.touched) {
//     this.onTouched();
//     this.touched = true;
//   }
// }

// setDisabledState(disabled: boolean) {
//   this.disabled = disabled;
// }
