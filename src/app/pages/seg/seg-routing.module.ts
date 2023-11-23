import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegPage } from './seg.page';

const routes: Routes = [
  {
    path: '',
    component: SegPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegPageRoutingModule {}
