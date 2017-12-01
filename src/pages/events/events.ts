import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Event } from "./event";
import { EventDetailPage } from "../event-detail/event-detail";

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  private events : Event[];

  constructor(public navCtrl: NavController) {

    this.getEvents();

  }

  getEvents () {
    this.events = [
      {
        id: 0,
        title: 'BBQ!',
        content: 'Vandaag BBQ bij de baas thuis!',
        image: 'assets/imgs/bbq.jpeg',
        publishDate: new Date(),
        startDate: new Date()
      },
      {
        id: 1,
        title: 'Vergadering',
        content: 'Een belangrijke vergadering of Bart ontslagen word.',
        image: 'assets/imgs/meeting.jpg',
        publishDate: new Date(),
        startDate: new Date()
      }
    ];
  }

  showDetail(event : Event) {
    this.navCtrl.push(EventDetailPage, {event: event});
  }

}
