import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  signo: Array<object>;
  constructor(private modalCtrl: ModalController, public navParams: NavParams) { }

  ngOnInit() {
    console.log(this.navParams.get('data'))
    this.signo = this.navParams.get('data')
  }

  salirSinArgumentos(){
    this.modalCtrl.dismiss()
  }

  segmentChanged(event){
    console.log(event.target.value)
  }

}
