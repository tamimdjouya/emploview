import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import { IntranetPage } from '../pages/intranet/intranet';
import { AbsencePage } from '../pages/absence/absence';
import { CoursePage } from '../pages/course/course';
import { SalaryPage } from '../pages/salary/salary';
import { InterviewPage } from '../pages/interview/interview';
import { Interview2Page } from '../pages/interview2/interview2';
import { Interview3Page } from '../pages/interview3/interview3';
import { ResultaatPage } from '../pages/resultaat/resultaat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    IntranetPage,
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
    IntranetPage,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
