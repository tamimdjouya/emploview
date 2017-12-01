import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Announcement } from "../announcements/announcement";

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
