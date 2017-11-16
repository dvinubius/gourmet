import { Component, OnInit, DoCheck } from '@angular/core';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ShoppingListService]
})
export class ProjectComponent implements OnInit {
  mainRoute = true;

  constructor() { }

  ngOnInit() {
  }

  onNavigate(mainRoute: boolean) {
    this.mainRoute = mainRoute;
  }
}
