import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser = 'Valodzya';
  constructor() {}

  ngOnInit() {}

  // stub for future logoff feature
  logoff() {}
}
