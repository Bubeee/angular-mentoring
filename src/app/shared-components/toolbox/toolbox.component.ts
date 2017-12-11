import { Component, OnInit, Input } from '@angular/core';
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

  constructor() {}

  ngOnInit() {}

  onSearch() {
    console.log(this.searchString);
  }
}
