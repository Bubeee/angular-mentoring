import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  searchString = '';

  @Input()
  itemTitle: string;

  @Output() onSearch = new EventEmitter<string>();
  @Output() onAdd = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  search() {
    this.onSearch.emit(this.searchString);
  }

  add() {
    this.onAdd.emit();
  }
}
