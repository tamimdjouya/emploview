import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Event } from "../../Models/event";
import { EventDetailPage } from "../event-detail/event-detail";
import { AddEventPage} from "../add-event/add-event";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  private events : Event[] = [];
  public signups = [];
  private id = 1;
  private eventsArray;
  public isAdmin = false;

  constructor(public navCtrl: NavController, public navParams : NavParams, public authService: AuthServiceProvider) {

    this.getEvents();
    this.addMoreArray();
    this.getSignups();
    this.isAdmin = this.authService.validateIfAdmin();


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

  addMoreArray(){
    if (this.navParams.get('eventKey')){
      this.eventsArray = this.navParams.get('eventKey');

      let id = this.id++;
      var title = this.eventsArray['title'];
      var content = this.eventsArray['content'];
      var image = this.eventsArray['image'];
      var publishDate = this.eventsArray['publishDate'];
      var startDate = new Date();

      this.events.push({id, title, content, image, publishDate, startDate});
      console.log(this.eventsArray);
    }else
      console.log('Array leeg');

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

  addBtnEvent(){
    this.navCtrl.push(AddEventPage);
  }

}
