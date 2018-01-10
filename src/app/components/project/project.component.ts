import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: []
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
