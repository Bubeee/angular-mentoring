import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  Validator,
  AbstractControl,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS
} from '@angular/forms';
import { ISelectableItem } from './selectable-item';
import { pickerValidator } from './picker.validator';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => PickerComponent)
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PickerComponent),
      multi: true
    }
  ]
})
export class PickerComponent implements OnInit, ControlValueAccessor {
  private touched: boolean;
  private valid: boolean;
  private innerValue: ISelectableItem[] = [];

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

  updateCheckedItems(item, event) { }

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
    if (pickerValidator(control)) {
      this.valid = false;
    } else {
      this.valid = true;
    }
    return pickerValidator(control);
  }

  constructor() {}

  ngOnInit() {}
}
