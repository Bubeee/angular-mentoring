import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { SearchableItem } from './searchable-item';
import { ConfirmaitonDialogOverlayService } from '../../shared-services/confirmation-dialog-overlay/confirmation-dialog-overlay.service';

@Component({
  selector: 'app-searchable-item',
  templateUrl: './searchable-item.component.html',
  styleUrls: ['./searchable-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchableItemComponent implements OnInit {
  @Input() searchableItem: SearchableItem;
  @Input() itemTitle: string;

  @Output() onDelete = new EventEmitter<number>();

  constructor(private deleteDialog: ConfirmaitonDialogOverlayService) {}

  delete(item: SearchableItem) {
    this.onDelete.emit(item.id);
  }

  deleteItem(item: SearchableItem) {
    const dialogRef = this.deleteDialog.open({ data: item });
    dialogRef.onDelete.subscribe(() => {
      this.onDelete.emit(item.id);
    });
  }

  ngOnInit() {}
}
