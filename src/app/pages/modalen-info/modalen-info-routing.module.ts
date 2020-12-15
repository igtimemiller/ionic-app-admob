import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalenInfoPage } from './modalen-info.page';

const routes: Routes = [
  {
    path: '',
    component: ModalenInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalenInfoPageRoutingModule {}
