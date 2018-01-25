import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventsPage } from "../events/events";
import { NotificationService } from "../../providers/notification-service/notification-service";

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  private event = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public notificationSerivce: NotificationService) {
    this.event;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  addEvent(){
    //console.log(this.events);
    this.navCtrl.setRoot(EventsPage, {eventKey : this.event});
    this.notificationSerivce.showNotificaiton(this.event['event']);
  }

}
