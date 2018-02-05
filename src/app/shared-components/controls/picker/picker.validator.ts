import { AbstractControl } from '@angular/forms';

export function pickerValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  console.log(control.value);
  console.log(control.value.filter(value => value.checked).length > 0);
  return control.value.filter(value => value.checked).length > 0
    ? null
    : {
        pickerValidator: true
      };
}
