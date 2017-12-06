import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController} from "ionic-angular";
import { ResultaatPage} from "../resultaat/resultaat";

/**
 * Generated class for the Interview3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interview3',
  templateUrl: 'interview3.html',
})
export class Interview3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Interview3Page');
  }

  resultaat(){
    this.navCtrl.push(ResultaatPage);
  }
  // doAlert() {
  //   let alert = this.alertCtrl.create({
  //     title: 'Bedankt!',
  //     subTitle: 'Je enquete is succesvol opgestuurd!',
  //     buttons: ['Ok']
  //   });
  //
  //   alert.present();
  // }

}
