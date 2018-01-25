import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AnnouncementsPage } from '../pages/announcements/announcements';
import { EventsPage } from "../pages/events/events";
import { LocalNotifications } from '@ionic-native/local-notifications';
import {LoginPage} from "../pages/login/login";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              private localNotifications: LocalNotifications) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Mededelingen', component: AnnouncementsPage },
      { title: 'Evenementen', component: EventsPage },
      // { title: 'HRM', component: HrmPage },
      // { title: 'Salaris', component: SalaryPage },
      // { title: 'Verlof', component: AbsencePage },
      // { title: 'Cursus', component: CoursePage },
      { title: 'Logout', component: LoginPage }

    ];

    this.showNotification('Nieuwe app!');

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  showNotification(message) {
    this.localNotifications.schedule({
      id: 1,
      title: 'Emploview',
      text: message,
      icon: 'res://icon',
    });
  }
}
