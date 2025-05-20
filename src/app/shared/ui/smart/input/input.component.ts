import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IInput } from '../../../interfaces';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-input',
  imports: [NgIf],
  templateUrl: './input.component.html',
  styleUrl: './input.component.sass',
  providers: [
    {
      useExisting: forwardRef(() => InputComponent),
      multi: true,
      provide: NG_VALUE_ACCESSOR,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() inputConfig!: IInput;

  public currentValue: string = '';

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
    this.currentValue = (<HTMLInputElement>event.target).value;
    this.onChange((<HTMLInputElement>event.target).value);
  }

  onInputBlur = (): void => this.onTouched();
}
