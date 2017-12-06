import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Event } from "../../Models/event";
import { EventDetailPage } from "../event-detail/event-detail";

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  private events : Event[];
  public signups = [];

  constructor(public navCtrl: NavController) {

    this.getEvents();
    this.getSignups();

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

  getSignups() {
    this.signups = [0];
  }

  isSignedup(eventId) {
    return this.signups.indexOf(eventId) !== -1;
  }

  showDetail(event : Event) {
    this.navCtrl.push(EventDetailPage, {
      event: event,
      signups: this.signups,
      callback: (signups) => {
        this.signups = signups;
      }
    });
  }

}
