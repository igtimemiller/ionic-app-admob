import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalenPage } from './modalen.page';

const routes: Routes = [
  {
    path: '',
    component: ModalenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalenPageRoutingModule {}
