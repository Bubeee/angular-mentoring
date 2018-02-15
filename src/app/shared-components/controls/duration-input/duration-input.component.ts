import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  AbstractControl,
  NG_VALIDATORS,
  Validator
} from '@angular/forms';
import { createNumberValidator } from '../../validators/number.vaidator';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true
    }
  ]
})
export class DurationInputComponent implements OnInit, ControlValueAccessor, Validator {
  public touched: boolean;
  public dirty: boolean;
  public valid: boolean;
  public innerValue: any = '';

  public onTouchedCallback: () => void;
  public onChangeCallback: (_: any) => void;

  public validator = createNumberValidator();

  get value(): any {
    return this.innerValue;
  }

  set value(value: any) {
    if (value !== this.innerValue) {
      this.dirty = true;
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

  onBlur() {
    this.touched = true;
    this.onTouchedCallback();
  }

  validate(control: AbstractControl) {
    const validationResult = this.validator(control);
    if (validationResult) {
      this.valid = false;
    } else {
      this.valid = true;
    }
    return validationResult;
  }

  constructor() {}

  ngOnInit() {}
}
