import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransportrequestPageRoutingModule } from './transportrequest-routing.module';

import { TransportrequestPage } from './transportrequest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransportrequestPageRoutingModule
  ],
  declarations: [TransportrequestPage]
})
export class TransportrequestPageModule {}
