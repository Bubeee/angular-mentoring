import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { SearchableItem } from './searchable-item';

@Component({
  selector: 'app-searchable-item',
  templateUrl: './searchable-item.component.html',
  styleUrls: ['./searchable-item.component.css']
})
export class SearchableItemComponent implements OnInit {
  @Input() searchableItem: SearchableItem;
  @Input() itemTitle: string;

  @Output() onDelete = new EventEmitter<number>();

  constructor() {}

  delete(id: number) {
    this.onDelete.emit(id);
  }
  ngOnInit() {}
}
