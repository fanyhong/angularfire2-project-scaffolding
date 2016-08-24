import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  directives: [ROUTER_DIRECTIVES],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = 'Angularfire2 Example using Firebase Database!';
  constructor(af: AngularFire) {

  }
}
