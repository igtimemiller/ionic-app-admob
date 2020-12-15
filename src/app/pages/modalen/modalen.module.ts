import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalenPageRoutingModule } from './modalen-routing.module';

import { ModalenPage } from './modalen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalenPageRoutingModule
  ],
  declarations: [ModalenPage]
})
export class ModalenPageModule {}
