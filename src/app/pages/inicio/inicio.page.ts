import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router'

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nombre: string;
  idioma: string = 'espanol';

  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'heart-outline',
      name: 'Buttons',
      redirectTo: '/botones'
    },
    {
      icon: 'list-outline',
      name: 'List',
      redirectTo: '/list'
    },
    {
      icon: 'albums-outline',
      name: 'Modal',
      redirectTo: '/modal'
    },
  ];

  cambiodeidioma(){
    if(this.idioma === 'espanol'){
      this.idioma='ingles'
    }else{
      this.idioma='espanol'
    }
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  anadirNombre(event){
    this.nombre = event.target.value
    this.storage.set('name', this.nombre);
  }

  getNombre(){
    this.storage.get('name').then((val) => {
      console.log('Your name is', val);
    });
  }


  constructor(private storage: Storage,public router:Router) { }

  ngOnInit() {
    this.storage.get('name').then((val) => {
      if(val != undefined && val != null){
        this.router.navigate([ 'modal' ])
      }
    });
  }
  
  randomNumber(min, max) {  
      return Math.random() * (max - min) + min; 
  } 

  imagenfuncion(){
    let array = ['assets/icon/background-images-slides/cancerback.png','assets/icon/background-images-slides/ariesback.png','assets/icon/background-images-slides/gemiback.png','assets/icon/background-images-slides/acuaback.png','assets/icon/background-images-slides/leoback.png','assets/icon/background-images-slides/sagiback.png','assets/icon/background-images-slides/tauroback.png','assets/icon/background-images-slides/virgoback.png']
    

    let randomnumbero = Math.floor(this.randomNumber(0,7))
    
    var imagen = array[randomnumbero]

    return imagen

  }

}
