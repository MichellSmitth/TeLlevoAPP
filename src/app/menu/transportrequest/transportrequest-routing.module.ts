import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportrequestPage } from './transportrequest.page';

const routes: Routes = [
  {
    path: '',
    component: TransportrequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportrequestPageRoutingModule {}
