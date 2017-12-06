import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AbsencePage} from '../absence/absence';
import {InterviewPage} from "../interview/interview";

@Component({
  selector: 'page-course',
  templateUrl: 'course.html'
})
export class CoursePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  nextPage(){
    this.navCtrl.push(InterviewPage);
  }
}
