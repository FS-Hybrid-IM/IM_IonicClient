import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FriendObjService } from "./friend.service";

@Component({
  selector: 'friend-list',
  templateUrl: 'friend.html'
})
export class FriendList {

  talkingLists;

  constructor(private friendObjService: FriendObjService) {
    this.talkingLists = friendObjService.getListDate();
  }

}
