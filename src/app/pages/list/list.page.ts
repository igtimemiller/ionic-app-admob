import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private dataService: DataService) { }

  usuarios: Observable<any>;

  @ViewChild(IonList) ionList: IonList;
  
  
  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios()
  }

  delete(id){
    console.log("usuarios", this.usuarios)
    this.usuarios.subscribe(item => {
      console.log("item", item)
      item.forEach((element,index) => {
        if(element.id === id){
          console.log(element)
          item.splice(index,1);
        }
      });
      console.log("item", item)
    })
    this.usuarios = this.usuarios;
    this.ionList.closeSlidingItems();
  }

}
