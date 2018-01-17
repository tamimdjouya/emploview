import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Announcement } from "../../Models/announcement";
import { AnnouncementDetailPage } from "../announcement-detail/announcement-detail";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {AddAnnouncementPage} from "../add-announcement/add-announcement";
import {AdminPage} from "../admin/admin";




@Component({
  selector: 'page-announcements',
  templateUrl: 'announcements.html'
})
export class AnnouncementsPage {

  private announcements : Announcement[] = [];
  private id = 2;
  private announcementArray;
  public isAdmin = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider) {
    this.getAnnouncements();
    this.addMoreArray();
    this.isAdmin = this.authService.validateIfAdmin();
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
      },

    ];
  }

  addMoreArray(){
    if (this.navParams.get('announcementKey')){
      this.announcementArray = this.navParams.get('announcementKey');

      let id = this.id++;
      var title = this.announcementArray['title'];
      var content = this.announcementArray['content'];
      var image = this.announcementArray['image'];
      var publishDate = this.announcementArray['publishDate'];

      this.announcements.push({id, title, content, image, publishDate});
      console.log(this.announcementArray);
    }else
      console.log('Array leeg');

  }


  showDetail(announcement : Announcement) {
    this.navCtrl.push(AnnouncementDetailPage, {announcement: announcement});
  }

  ionViewCanEnter(){
    return this.authService.authenticated();
  }

  addBtnAnnouncement(){
    this.navCtrl.push(AddAnnouncementPage);
  }

  goToAdmin(){
    this.navCtrl.push(AdminPage);
  }


}
