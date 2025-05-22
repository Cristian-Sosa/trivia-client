import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IInputCheckbox } from '../../../interfaces';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-input-checkbox',
  imports: [NgIf],
  templateUrl: './input-checkbox.component.html',
  styleUrl: './input-checkbox.component.sass',
  providers: [
    {
      useExisting: forwardRef(() => InputCheckboxComponent),
      multi: true,
      provide: NG_VALUE_ACCESSOR,
    },
  ],
})

export class InputCheckboxComponent implements ControlValueAccessor {
@Input() inputConfig!: IInputCheckbox;

public currentValue: boolean = false;

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(obj: any): void {
    if (this.inputConfig !== null) {
      this.currentValue = obj;
    }
  }
  registerOnChange = (fn: any): void => (this.onChange = fn);

  registerOnTouched = (fn: any): void => (this.onTouched = fn);

  setDisabledState?(isDisabled: boolean): void {
    if (this.inputConfig) {
      this.inputConfig.isDisabled = isDisabled;
    }
  }

  onInputChange(event: Event): void {
    this.currentValue = (<HTMLInputElement>event.target).checked;
    this.onChange((<HTMLInputElement>event.target).checked);
  }

  onInputBlur = (): void => this.onTouched();
}
