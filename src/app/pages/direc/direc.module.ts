import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirecPageRoutingModule } from './direc-routing.module';

import { DirecPage } from './direc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirecPageRoutingModule
  ],
  declarations: [DirecPage]
})
export class DirecPageModule {}
