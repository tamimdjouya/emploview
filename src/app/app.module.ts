import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import { AnnouncementsPage } from '../pages/announcements/announcements';
import { AnnouncementDetailPage } from "../pages/announcement-detail/announcement-detail";
import { HrmPage } from '../pages/hrm/hrm';
import { AbsencePage } from '../pages/absence/absence';
import { CoursePage } from '../pages/course/course';
import { SalaryPage } from '../pages/salary/salary';
import { InterviewPage } from '../pages/interview/interview';
import { Interview2Page } from '../pages/interview2/interview2';
import { Interview3Page } from '../pages/interview3/interview3';
import { ResultaatPage } from '../pages/resultaat/resultaat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventsPage } from "../pages/events/events";
import { EventDetailPage } from "../pages/event-detail/event-detail";
import { LocalNotifications } from "@ionic-native/local-notifications";

@NgModule({
  declarations: [
    MyApp,
    AnnouncementsPage,
    AnnouncementDetailPage,
    EventsPage,
    EventDetailPage,
    HrmPage,
    AbsencePage,
    CoursePage,
    SalaryPage,
    InterviewPage,
    Interview2Page,
    Interview3Page,
    ResultaatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AnnouncementsPage,
    AnnouncementDetailPage,
    EventsPage,
    EventDetailPage,
    HrmPage,
    AbsencePage,
    CoursePage,
    SalaryPage,
    InterviewPage,
    Interview2Page,
    Interview3Page,
    ResultaatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalNotifications
  ]
})
export class AppModule {}
