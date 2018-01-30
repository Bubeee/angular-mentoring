import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, Validator, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css']
})
export class PickerComponent implements OnInit, ControlValueAccessor {
  private touched: boolean;
  private valid: boolean;
  private innerValue: any = '';

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
    // TODO: validator
  }

  constructor() {}

  ngOnInit() {}
}
