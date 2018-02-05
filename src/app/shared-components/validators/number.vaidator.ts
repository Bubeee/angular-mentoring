import { AbstractControl } from '@angular/forms';

export function numberValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  return !isNaN(control.value)
    ? null
    : {
        numberValidator: true
      };
}
