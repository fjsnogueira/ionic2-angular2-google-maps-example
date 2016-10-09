import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // Map params
  mapLat: number = 51.678418;
  mapLng: number = 7.809007;

  constructor(public navCtrl: NavController) {

  }

}
