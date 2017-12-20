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

  constructor() {}

  ngOnInit() {}

  search() {
    this.onSearch.emit(this.searchString);
  }
}
