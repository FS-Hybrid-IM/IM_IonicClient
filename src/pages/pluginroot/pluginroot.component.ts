import { Component } from '@angular/core';
import { NavParams, ViewController, IonicPage } from 'ionic-angular';
import { AlertArea } from '../alerticon/alert-icon.component';
import { ImArea } from "../implugin/im-area.component";
import { TabsPage } from "../plugintabs/plugintabs.component";

@Component({
    template: '<ion-nav [root]="this.rootPage" [rootParams]="this.rootParams"></ion-nav>'
})
export class PluginRoot {
    // private rootPage = ImArea;
    private rootPage = TabsPage;
    private rootParams;

    constructor(public navParams: NavParams, public viewCtrl: ViewController) {
        this.rootParams = { ...navParams.data, viewCtrl: viewCtrl};
    }
}
