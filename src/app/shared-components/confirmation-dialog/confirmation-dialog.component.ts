import { Component, OnInit, Inject } from '@angular/core';
import { ConfirmationDialogOverlayRef } from './confirmation-dialog-overlayref';
import { SearchableItem } from '../searchable-item/searchable-item';
import { Searchable_Item_Data } from './confirmation-dialog-overlay-data';

@Component({
  selector: 'app-confirmation-dialog-overlay',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(
    public dialogRef: ConfirmationDialogOverlayRef,
    @Inject(Searchable_Item_Data) public item: SearchableItem) { }

  ngOnInit() {
  }

  noClick() {
    this.dialogRef.close();
  }

  yesClick() {
    this.dialogRef.delete();
  }
}
