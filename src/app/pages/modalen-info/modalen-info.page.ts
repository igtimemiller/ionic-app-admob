import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modalen-info',
  templateUrl: './modalen-info.page.html',
  styleUrls: ['./modalen-info.page.scss'],
})
export class ModalenInfoPage implements OnInit {

  constructor(private modalCtrl: ModalController, public navParams: NavParams) { }
  signo: Array<object>;
  cuando: string = 'today';
  ngOnInit() {
    console.log(this.navParams.get('data'))
    this.signo = this.navParams.get('data')
  }

  salirSinArgumentos(){
    this.modalCtrl.dismiss()
  }

  segmentChanged(event){
    console.log(event.target.value)
    this.cuando = event.target.value
  }

}
