import { Component, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  AbstractControl,
  NG_VALIDATORS
} from '@angular/forms';
import { createDateDimeValidator } from '../../validators/date-format.vaidator';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    }
  ]
})
export class DateInputComponent implements OnInit, ControlValueAccessor {
  private valid: boolean;
  private touched: boolean;
  private innerValue: any = '';

  private validator = createDateDimeValidator('DD/MM/YYYY');

  private onTouchedCallback: () => void;
  private onChangeCallback: (_: any) => void;

  get value(): any {
    return this.innerValue;
  }

  set value(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
      this.onChangeCallback(value);
    }
  }

  writeValue(value: any): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  onBlur() {
    this.touched = true;
    this.onTouchedCallback();
  }

  validate(control: AbstractControl) {
    if (this.validator(control)) {
      this.valid = false;
    } else {
      this.valid = true;
    }

    return this.validator(control);
  }

  constructor() {}

  ngOnInit() {}
}
