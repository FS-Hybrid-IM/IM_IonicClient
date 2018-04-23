import { Component } from '@angular/core';
import { NavParams, ViewController, IonicPage, AlertController } from 'ionic-angular';
import { AlertArea } from '../alerticon/alert-icon.component';
import { ImArea } from "../implugin/im-area.component";
import { TabsPage } from "../plugintabs/plugintabs.component";
import { LoginPage } from "../login/loginpage.component";

@Component({
    template: '<ion-nav [root]="this.rootPage" [rootParams]="this.rootParams"></ion-nav>'
})
export class PluginRoot {
    // private rootPage = ImArea;
    // private rootPage = TabsPage;
    private rootPage;
    private rootParams;

    constructor(public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController) {
        this.rootPage = TabsPage;
        this.rootParams = { ...this.navParams.data, viewCtrl: this.viewCtrl};
        this.checkIfLogin(navParams.data.loginStatus);
    }

    checkIfLogin(isLogin): void {
        if (!isLogin) {
            let prompt = this.alertCtrl.create({
                title: 'Login',
                message: "Enter a name and pass to the inputs",
                enableBackdropDismiss: false,
                inputs: [
                  {
                    name: 'user',
                    placeholder: 'user'
                  },
                  {
                    name: 'pass',
                    placeholder: 'password',
                    type: 'password'
                  },
                ],
                buttons: [
                  {
                    text: 'Cancel',
                    handler: data => {
                        this.viewCtrl.dismiss();
                      
                    }
                  },
                  {
                    text: 'OK',
                    handler: data => {
                        console.log('OK');
                    }
                  }
                ]
              });
              prompt.present();
          
        }
    }

}
