import { Component, OnInit, Input } from '@angular/core';
import { SearchableItem } from './searchable-item';

@Component({
  selector: 'app-searchable-item',
  templateUrl: './searchable-item.component.html',
  styleUrls: ['./searchable-item.component.css']
})
export class SearchableItemComponent implements OnInit {
  @Input() searchableItem: SearchableItem;

  constructor() {
  }

  ngOnInit() {}
}
