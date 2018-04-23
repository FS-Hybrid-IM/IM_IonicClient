import { Component } from '@angular/core';
import { IonicPage, ModalController} from 'ionic-angular';
import { PluginRoot } from "../pluginroot/pluginroot.component";
import { AlertServices } from "./alert-icon.services";
// import { AlertServices } from "./alert-icon.services";

@Component({
    selector: 'alert-area',
    templateUrl: 'alert-icon.html'
})
export class AlertArea {
    constructor(public modalCtrl: ModalController,
         private alertServices: AlertServices) {

      }

      toTalkPage() {
        let modal = this.modalCtrl.create(PluginRoot, {loginStatus: this.alertServices.getLoginStatus()});
        modal.present();
      }
}