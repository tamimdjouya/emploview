import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnnouncementsPage } from "../announcements/announcements";
import { NotificationService } from "../../providers/notification-service/notification-service";

/**
 * Generated class for the AddAnnouncementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-announcement',
  templateUrl: 'add-announcement.html',
})
export class AddAnnouncementPage {
  private announcement = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public notificationSerivce: NotificationService) {
   this.announcement;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddAnnouncementPage');
  }

  addAnnouncement(){
    console.log(this.announcement);
    this.navCtrl.setRoot(AnnouncementsPage, {announcementKey : this.announcement});
    this.notificationSerivce.showNotificaiton(this.announcement['title']);
  }
}
