import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegPageRoutingModule } from './seg-routing.module';

import { SegPage } from './seg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegPageRoutingModule
  ],
  declarations: [SegPage]
})
export class SegPageModule {}
