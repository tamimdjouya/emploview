import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Event } from "../../Models/event";

@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {

  private event: Event;
  public isSignedup;
  public signups;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController) {
    this.event = this.navParams.data.event;
    this.signups = this.navParams.data.signups;
    this.isSignedup = this.signups.indexOf(this.event.id) !== -1;
  }

  toggleSignedup() {
    this.isSignedup = !this.isSignedup;
    if(this.isSignedup) {
      this.signups.push(this.event.id);
      this.toastCtrl.create({ message: 'Je bent succesvol ingeschreven', duration: 3000}).present();
    }
    else {
      this.signups.splice(this.event.id, 1);
      this.toastCtrl.create({ message: 'Je bent succesvol uitgeschreven', duration: 3000}).present();
    }
  }

  ionViewWillLeave() {
    this.navParams.data.callback(this.signups);
  }
}
