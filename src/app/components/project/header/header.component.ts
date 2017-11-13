import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipesChosen = new EventEmitter<boolean>();

  // for the simplest solution to the dropdown problem
  // drop = false;
  constructor() { }

  ngOnInit() {
  }

  onSelect(link: string) {
    this.recipesChosen.emit(link === 'recipes');
  }

  // for the simplest solution to the dropdown problem
  // onDropdownClick() {
  //   this.drop = !this.drop;
  // }
}
