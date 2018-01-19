import { Component } from '@angular/core';
import { AlertController, NavController, NavParams, ToastController } from 'ionic-angular';
import { Event } from "../../Models/event";

@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {

  private event: Event;
  public isSignedup;
  public signups;
  public guests = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController) {
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

  addGuest() {
    this.alertCtrl.create({
      title: 'Gast toevoegen',
      inputs: [
        {
          name: 'name',
          placeholder: 'Naam'
        }
        ],
      buttons: [
        {
          text: 'Annuleer',
          role: 'cancel'
        },
        {
          text: 'Voeg toe',
          handler: data => {
            this.guests.push(data.name);
          }
        }
      ]
    }).present();
  }

  removeGuest(guest) {
    let index = this.guests.indexOf(guest);
    this.guests.splice(index, 1);
  }
}
