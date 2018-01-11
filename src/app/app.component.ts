import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  app_name_in_title = `An App for Food Lovers`;

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC8jSKQ-BIqrb8DEaVaW_dIy2PW5AsDGYM',
      authDomain: 'food-lovers-b7063.firebaseapp.com'});
  }
}
