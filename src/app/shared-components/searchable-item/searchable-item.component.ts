import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SearchableItem } from './searchable-item';
import { ConfirmaitonDialogOverlayService } from '../../shared-services/confirmation-dialog-overlay/confirmation-dialog-overlay.service';

@Component({
  selector: 'app-searchable-item',
  templateUrl: './searchable-item.component.html',
  styleUrls: ['./searchable-item.component.css']
})
export class SearchableItemComponent implements OnInit {
  @Input() searchableItem: SearchableItem;
  @Input() itemTitle: string;

  @Output() onDelete = new EventEmitter<SearchableItem>();

  constructor(private deleteDialog: ConfirmaitonDialogOverlayService) {}

  delete(item: SearchableItem) {
    this.onDelete.emit(item);
  }

  deleteItem(item: SearchableItem) {
    const dialogRef = this.deleteDialog.open({ data: item });
    dialogRef.onDelete.subscribe(() => {
      this.onDelete.emit(item);
    });
  }

  ngOnInit() {}
}
