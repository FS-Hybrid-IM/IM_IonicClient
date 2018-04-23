import { Component } from '@angular/core';
import { NavParams, ViewController, NavController } from "ionic-angular";
import { TabsPage } from "../plugintabs/plugintabs.component";


@Component({
  templateUrl: 'loginpage.html'
})
export class LoginPage {

    tabsParams: any;
    params;
    pushPage: any;

    constructor(public navParams: NavParams, public navCtrl: NavController) {

        this.tabsParams = navParams;
    }

    changeComponent():void {
        this.navCtrl.push(TabsPage, this.tabsParams);
    }
}
