import { Component } from '@angular/core';
import { ImArea } from "../implugin/im-area.component";
import { ContactPage } from "../contact/contact";
import { FriendList } from "../list/friend";
import { NavParams, ViewController } from "ionic-angular";


@Component({
  templateUrl: 'plugintabs.html'
})
export class TabsPage {

  tabsParams;

  talkArea = ImArea;
  tab3Root = FriendList;

  constructor(public navParams: NavParams) {

    this.tabsParams = navParams;
  }
}
