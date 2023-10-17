import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'share-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [`.list-group-item{cursor:pointer}`],
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
