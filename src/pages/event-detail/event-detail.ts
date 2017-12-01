import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Event } from "../../Models/event";

@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {

  private event: Event;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.event = this.navParams.data.event;
  }
}
