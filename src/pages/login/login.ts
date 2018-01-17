import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AnnouncementsPage} from "../announcements/announcements";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import { AlertController} from "ionic-angular";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginData = {};
  public type = 'password';
  public showPass = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthServiceProvider, public alertCtrl: AlertController) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

    logForm(){
      console.log(this.loginData);
      return this.loginData;
    }

    next(){
      let admin = (this.loginData['username'] == "admin") && (this.loginData['password'] == "admin");
      let employee = (this.loginData['username'] == "medewerker") && (this.loginData['password'] == "123");

      if(admin){
        this.auth.validateAdmin(true);
        this.auth.login();
      }
      else if(employee){
        this.auth.validateAdmin(false);
        this.auth.login();
      }
      else{
        this.navCtrl.push('Announcements').catch(err => {
          let alert  = this.alertCtrl.create({
            title: 'Onjuiste inloggegevens',
            subTitle: 'probeer het opnieuw.',
            buttons: ['Okay']
          })
          alert.present();
        })
      }
      this.navCtrl.setRoot(AnnouncementsPage);
    }

  showPassword() {
    this.showPass = !this.showPass;

    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }

    isAuthenticated(){
      return this.auth.authenticated();
    }


}
