import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Announcement } from "./announcement";

@Component({
  selector: 'page-announcements',
  templateUrl: 'announcements.html'
})
export class AnnouncementsPage {

  private announcements : Announcement[];

  constructor(public navCtrl: NavController) {

    this.getAnnouncements();

  }

  getAnnouncements () {
    this.announcements = [
      {
        id: 0,
        title: 'Nieuwe app!',
        content: 'EmploView, de nieuwe alles in 1 app.',
        image: 'assets/imgs/new-app.png',
        publishDate: new Date()
      },
      {
        id: 1,
        title: 'Werknemers gezocht',
        content: 'Er worden nieuwe werknemers gezogd. Iedereen met nieuwe contacten is welken.',
        image: 'assets/imgs/employee.jpg',
        publishDate: new Date()
      },
      {
        id: 2,
        title: 'Nieuw kantoor',
        content: 'Binnenkort gaan we verhuizen.',
        image: 'assets/imgs/move.jpeg',
        publishDate: new Date()
      }
    ];
  }

}
