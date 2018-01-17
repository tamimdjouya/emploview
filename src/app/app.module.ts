import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

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
import { LoginPage } from '../pages/login/login';
import { AdminPage } from '../pages/admin/admin';
import { AddAnnouncementPage } from '../pages/add-announcement/add-announcement';
import { AddEventPage} from '../pages/add-event/add-event';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventsPage } from "../pages/events/events";
import { EventDetailPage } from "../pages/event-detail/event-detail";

import { LocalNotifications } from "@ionic-native/local-notifications";

import { AuthServiceProvider } from '../providers/auth-service/auth-service';


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
    ResultaatPage,
    LoginPage,
    AdminPage,
    AddAnnouncementPage,
    AddEventPage
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
    ResultaatPage,
    LoginPage,
    AdminPage,
    AddAnnouncementPage,
    AddEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalNotifications,
    AuthServiceProvider,
    File,
    Transfer,
    Camera,
    FilePath,
  ]
})
export class AppModule {}
