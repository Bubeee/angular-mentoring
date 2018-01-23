import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { SearchableItem } from './searchable-item';
import { ConfirmaitonDialogOverlayService } from '../../common/services/confirmation-dialog-overlay/confirmation-dialog-overlay.service';
import { Router } from '@angular/router';

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
  @Output() onEdit = new EventEmitter<number>();

  constructor(private deleteDialog: ConfirmaitonDialogOverlayService) {}

  deleteItem(item: SearchableItem) {
    const dialogRef = this.deleteDialog.open({ data: item });
    dialogRef.onDelete.subscribe(() => {
      this.onDelete.emit(item.id);
    });
  }

  editItem(id: number) {
    this.onEdit.emit(id);
  }

  ngOnInit() {}
}
