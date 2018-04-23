import { Component } from '@angular/core';
import { ImArea } from "../implugin/im-area.component";
import { ContactPage } from "../contact/contact";
import { FriendList } from "../list/friend";
import { NavParams, ViewController } from "ionic-angular";
import { PluginHomePage } from "../pluginhome/pluginhome.component";


@Component({
  templateUrl: 'plugintabs.html'
})
export class TabsPage {

  tabsParams;

  talkArea = ImArea;
  tab3Root = FriendList;
  tabHomePage = PluginHomePage;

  constructor(public navParams: NavParams) {

    this.tabsParams = navParams;
  }
}
