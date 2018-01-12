import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          const tree = this.router.parseUrl(this.router.url);
          if (tree.fragment) {
        const element = document.querySelector('#' + tree.fragment);
        if (element) { element.scrollIntoView(); }
          }
       }
    });
  }
}
