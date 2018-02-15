import { AbstractControl, ValidatorFn } from '@angular/forms';

export function createNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return !isNaN(control.value)
      ? null
      : { invalidFormat: { value: control.value } };
  };
}
