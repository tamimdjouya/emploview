import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CoursePage} from "../course/course";

/**
 * Generated class for the ResultaatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultaat',
  templateUrl: 'resultaat.html',
})
export class ResultaatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultaatPage');
  }

  // Doughnut
  public doughnutChartLabels:string[] = ['Goed', 'Fout'];
  public doughnutChartData:number[] = [500, 300];
  public doughnutChartType:string = 'doughnut';

// events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  beginScherm(){
    this.navCtrl.push(CoursePage);
  }



}
