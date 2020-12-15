import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalenInfoPageRoutingModule } from './modalen-info-routing.module';

import { ModalenInfoPage } from './modalen-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalenInfoPageRoutingModule
  ],
  declarations: [ModalenInfoPage]
})
export class ModalenInfoPageModule {}
