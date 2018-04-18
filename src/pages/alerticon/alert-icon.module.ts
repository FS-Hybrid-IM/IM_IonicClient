import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertArea } from './alert-icon.component';

@NgModule({
  declarations: [
    AlertArea,
  ],
  imports: [
    // IonicPageModule.forChild(AlertArea),
  ],
  exports: [
    AlertArea
  ]
})
export class AlertAreaModule {}
