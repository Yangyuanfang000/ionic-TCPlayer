
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare var TcPlayer:any;
/**
 * Generated class for the VideoPlayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-play',
  templateUrl: 'video-play.html',
})
export class VideoPlayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // 字面意义理解就是“我要进来了”的那一刻，这个时候页面刚刚开始切换。你可以在这时对页面的数据进行预处理，这个钩子是每次都会调用的。
  ionViewWillEnter() {
    this.TCPlatVideoPlay()
  }


  TCPlatVideoPlay(){

    var option = {
      "mp4":"http://1252122025.vod2.myqcloud.com/8e0ee81dvodtransgzp1252122025/3b6b3c595285890781377626394/v.f10722.mp4?sign=dac57ed1db50761c8c457d8b91c0dd71&t=5b7fc68b",
      "width": 640,
      "height": 480,
      "autoplay":false,
      "x5_type": "h5",
      "x5_fullscreen": "true",
      "controls": "system",
      "coverpic":{"style":"cover","src":"http://www.tvcx.com/uploads/video/f60d58c2d15d5003e116eb66f74561dd.jpg"},

    };

   var play = new TcPlayer("id_video_container", option);

  }


}
