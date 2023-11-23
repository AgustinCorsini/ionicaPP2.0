import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirecPage } from './direc.page';

const routes: Routes = [
  {
    path: '',
    component: DirecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirecPageRoutingModule {}
