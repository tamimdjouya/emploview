import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Announcement } from "../../Models/announcement";

@Component({
  selector: 'page-announcement-detail',
  templateUrl: 'announcement-detail.html'
})
export class AnnouncementDetailPage {

  private announcement: Announcement;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.announcement = this.navParams.data.announcement;
  }
}
