import { Router } from '@angular/router';
import { ModalInfoPage } from './../modal-info/modal-info.page';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { HTTP } from '@ionic-native/http/ngx';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController,private storage: Storage,public router:Router) { }

  cargado: boolean=false;
  clickfavorito: boolean=false;
  nombrePersonal: string;
  signos: Observable<any>;
  signosObject: Array<Object> = [];
  signosObjectAux: Array<Object> = [];
  signosZodiacales: object = {
    aries: {},
    taurus: {},
    gemini: {},
    cancer: {},
    leo: {},
    virgo:{},
    libra:{},
    scorpio: {},
    sagittarius: {},
    capricorn: {},
    aquarius: {},
    pisces: {}
  }
  signosFechas: Array<Object> = [
    ['aries','Mar 21 - Apr 19','assets/icon/aries.svg','Aries'],
    ['taurus','Apr 20 - May 20','assets/icon/tauro.svg','Tauro'],
    ['gemini','May 21 - Jun 20','assets/icon/geminis.svg','Géminis'],
    ['cancer','Jun 21 - Jul 22','assets/icon/cancer.svg','Cancer'],
    ['leo','Jul 23 - Ago 23','assets/icon/leon.svg','Leo'],
    ['virgo','Ago 24 - Sep 22','assets/icon/virgo.svg','Virgo'],
    ['libra','Sep 23 - Oct 22','assets/icon/libra.svg','Libra'],
    ['scorpio','Oct 23 - Nov 21','assets/icon/escorpion.svg','Escorpio'],
    ['sagittarius','Nov 22 - Dic 21','assets/icon/sagitario.svg','Sagitario'],
    ['capricorn','Dic 22 - Ene 19','assets/icon/capricornio.svg','Capricornio'],
    ['aquarius','Ene 20 - Feb 19','assets/icon/acuario.svg','Acuario'],
    ['pisces','Feb 20 - Mar 20','assets/icon/piscis.svg','Piscis'],
  ];




  elfavorito: string;

  colores: Array<Object> = [
    ['Red', 'Rojo'],
    ['Green', 'Verde'],
    ['Blue', 'Azul'],
    ['Black', 'Negro'],
    ['Yellow', 'Amarillo'],
    ['White', 'Blanco'],
    ['Gold', 'Oro'],
    ['Orchid', 'Violeta'],
    ['Purple', 'Morado'],
    ['Pink', 'Rosa'],
    ['Copper', 'Cobre'],
  ];


  cambiodeidioma(){
    this.router.navigate([ 'modalen' ])
  }

  randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min);
  } 

  ngOnInit() {

    this.storage.get('diadehoy').then((val) => {
        var today = new Date();
        var dd  = String(today.getDate()).padStart(2, '0');

        console.log("diadehoy", dd)
        console.log("storage", val)

        if(dd === val){
          this.storage.get('info').then((value) => {
            this.signosZodiacales = value
            console.log("this.signosZodiacales", this.signosZodiacales)
          })
        }else{
          this.storage.set('diadehoy', dd);
          this.signosFechas.forEach((element,index)=>{
            this.signosZodiacales[element[0]]['amor'] = this.randomNumber(1,100)
            this.signosZodiacales[element[0]]['salud'] = this.randomNumber(1,100)
            this.signosZodiacales[element[0]]['amor-futuro'] = this.randomNumber(1,100)
            this.signosZodiacales[element[0]]['salud-futuro'] = this.randomNumber(1,100)
          })
          this.storage.set('info',this.signosZodiacales)
          console.log("signoszodiacales", this.signosZodiacales)
        }

    })


    this.storage.get('favorito').then((val) => {
      this.elfavorito = val
    })

    this.storage.get('name').then((val) => {
      this.nombrePersonal = val
    });
  }

  clickFavorito(item){
    console.log("me clickaste", item)

    this.clickfavorito = true 
    setTimeout(() => {
      this.clickfavorito = false 
    }, 200);
    this.storage.set('favorito', item[0]);

    setTimeout(() => {
      this.recalcularFavorito()
    }, 150);
  }

  recalcularFavorito(){
    this.storage.get('favorito').then((val) => {
      this.signosObjectAux.forEach((element,index)=>{
        if(element[0] === val){
          element[5].favorito = true
        }else{
          element[5].favorito = false
        }
      })
      this.signosObject = this.signosObjectAux
    });
  }

  reordenarFavorito(){
    this.storage.get('favorito').then((val) => {
      let indice;
      this.signosObjectAux.forEach((element,index)=>{
        if(element[0] === val){
          this.signosObjectAux.splice(index,1)
          indice = element
        }
      })
      this.signosObjectAux.unshift(indice)
      this.signosObject = this.signosObjectAux
    })
  }


  changeit(event){
    this.signosObject = []
    if(event.target.value.trim() === ''){
      this.signosObject = this.signosObjectAux
    }else{
      this.signosObjectAux.forEach(element=>{
        if(element[0].includes(event.target.value)){
          this.signosObject.push(element)
        }
      })
    }
  }

  async mostrarModal(item){
    setTimeout( async () => {
      if(this.clickfavorito){

      }else{
        const modal = await this.modalCtrl.create({
          component: ModalInfoPage,
          componentProps: {
            data: item
          },
          swipeToClose: true,
          animated: true,
          mode: 'ios'
        });
        return await modal.present();
      }
    }, 100);
  }



}
