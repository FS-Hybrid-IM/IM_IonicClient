import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertArea } from './alert-icon.component';
import { AlertServices } from "./alert-icon.services";

@NgModule({
  declarations: [
    AlertArea,
  ],
  imports: [
    // IonicPageModule.forChild(AlertArea),
  ],
  exports: [
    AlertArea
  ],
  providers: [
    AlertServices
  ]
})
export class AlertAreaModule {}
