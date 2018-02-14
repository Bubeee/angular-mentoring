import { AbstractControl } from '@angular/forms';

export function pickerValidator(
  control: AbstractControl
): { [key: string]: any } {
  return control.value.length > 0
    ? null
    : { pickerValidator: { value: control.value } };
}
