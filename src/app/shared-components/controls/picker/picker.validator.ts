import { FormControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { ISelectableItem } from './selectable-item';

export function createPickerValidator(): ValidatorFn {
  return (control: FormControl): ValidationErrors => {
    if (control.value && control.value.length > 0) {
      const authorsArray: ISelectableItem[] = control.value as ISelectableItem[];
      const isSelected = authorsArray.some(val => val.checked === true);

      return isSelected ? null : { customPickerRequired: { value: control.value } };
    }
  };
}
