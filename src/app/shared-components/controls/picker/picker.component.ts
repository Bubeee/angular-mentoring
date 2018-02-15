import {
  Component,
  OnInit,
  Input,
  forwardRef,
  ChangeDetectorRef
} from '@angular/core';
import {
  ControlValueAccessor,
  AbstractControl,
  NG_VALUE_ACCESSOR,
  Validator
} from '@angular/forms';
import { ISelectableItem } from './selectable-item';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PickerComponent),
      multi: true
    }
  ]
})
export class PickerComponent implements ControlValueAccessor {
  @Input() items: ISelectableItem[] = [];

  propagateChange: any = () => {};
  validateFn: any = () => {};

  writeValue(items: any): void {
    if (items) {
      this.items = items;
      // this.cd.markForCheck();
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {}

  updateCheckedItems(item: ISelectableItem, event) {
    item.checked = !item.checked;
    this.propagateChange(this.items);
    this.writeValue(this.items);
  }

  constructor(private cd: ChangeDetectorRef) {}
}
