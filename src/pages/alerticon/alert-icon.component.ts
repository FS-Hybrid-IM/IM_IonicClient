import { Component } from '@angular/core';
import { IonicPage, ModalController} from 'ionic-angular';
import { PluginRoot } from "../pluginroot/pluginroot.component";

@Component({
    selector: 'alert-area',
    templateUrl: 'alert-icon.html'
})
export class AlertArea {
    constructor(public modalCtrl: ModalController) {
      }

      toTalkPage() {
          let modal = this.modalCtrl.create(PluginRoot);
          modal.present();
      }
}