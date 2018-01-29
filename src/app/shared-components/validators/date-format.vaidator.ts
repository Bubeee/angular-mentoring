import { FormControl } from '@angular/forms';
import * as moment from 'moment';

export function validateDateFormat(control: FormControl) {
  const VALID_DATE_FORMAT = 'dd/MM/yyyy';

  return moment(control.value, VALID_DATE_FORMAT, true).isValid()
    ? null
    : {
        validateDateFormat: {
          valid: false
        }
      };
}
