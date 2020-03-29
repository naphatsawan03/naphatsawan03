import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the HotnewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotnews',
  templateUrl: 'hotnews.html',
})
export class HotnewsPage {
  hotnews:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http) {
    this.http.get("http://newsapi.org/v2/top-headlines?country=th&apiKey=0ffa7d110e3445268765c45c110efdec").map(res=>res.json()).subscribe(data=>{
      this.hotnews=data.articles;
      console.log(this.hotnews);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotnewsPage');
  }
  goToDetail(item:any){
    this.navCtrl.push(DetailPage,{item:item})
  }
}
