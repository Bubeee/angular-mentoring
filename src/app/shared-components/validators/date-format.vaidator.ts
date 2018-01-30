import { AbstractControl, ValidatorFn } from '@angular/forms';
import * as moment from 'moment';

export function createDateDimeValidator(validFormat: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    return moment(control.value, validFormat, true).isValid()
      ? null
      : {
          validateDateFormat: true
        };
  };
}
