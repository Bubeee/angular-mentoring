import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  AbstractControl,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  Validator
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
      useExisting: forwardRef(() => PickerComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => PickerComponent),
      multi: true
    }
  ]
})
export class PickerComponent
  implements OnInit, ControlValueAccessor, Validator {
  public innerValue: ISelectableItem[] = [];

  public onTouched: () => void;
  public onChange: (_: any) => void;

  public valid: boolean;
  public touched: boolean;

  get value(): any {
    return this.innerValue.filter(value => value.checked);
  }

  set value(value: any) {
    this.innerValue = value;
    this.onChange(value);
    this.onTouched();
  }

  get selectedValues() {
    return this.value.filter(value => value.checked);
  }

  updateCheckedItems(item, event) {
    this.validate(this);
  }

  writeValue(value: any): void {
    if (value !== undefined && value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  onBlur() {
    this.touched = true;
    this.onTouched();
  }

  validate(control: any) {
    const validationResult = pickerValidator(control);
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
