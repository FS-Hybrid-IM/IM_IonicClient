import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FriendObjService } from "./friend.service";
import { PluginDateService } from "../pluginroot/pluginroot.date.service";

@Component({
  selector: 'friend-list',
  templateUrl: 'friend.html'
})
export class FriendList {

  talkingLists;
  rootPrams;

  constructor(private friendObjService: FriendObjService,
    public navParams: NavParams, private navCtrl: NavController,
    private pluginDateService: PluginDateService) {
    this.talkingLists = friendObjService.getListDate();
    this.rootPrams = navParams;
  }

  toTalk(talkingFriend): void {

    this.pluginDateService.setTalkingPersion(talkingFriend);
    this.navCtrl.parent.select(2);

  }

}
