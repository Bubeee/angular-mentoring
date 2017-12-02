import { Component, OnInit } from "@angular/core";
import { SearchableItem } from "./searchable-item";

@Component({
  selector: "app-searchable-item",
  templateUrl: "./searchable-item.component.html",
  styleUrls: ["./searchable-item.component.css"]
})
export class SearchableItemComponent implements OnInit {
  itemsList: SearchableItem[];

  constructor(searchableItems: SearchableItem[]) {
    this.itemsList = searchableItems;
  }

  ngOnInit() {}
}
