import { AbstractControl } from '@angular/forms';

export function pickerValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  return control.value.filter(v => v.checked).length > 0
    ? null
    : {
        pickerValidator: true
      };
}
