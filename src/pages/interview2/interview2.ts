import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Interview3Page} from "../interview3/interview3";

/**
 * Generated class for the Interview2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interview2',
  templateUrl: 'interview2.html',
})
export class Interview2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Interview2Page');
  }

  nextPage(){
    this.navCtrl.push(Interview3Page);
  }

}
