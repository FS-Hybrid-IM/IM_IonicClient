import { Injectable } from '@angular/core';
import { Friend, FriendObj } from './friendobj';

@Injectable()
export class FriendObjService {

  friendObj: FriendObj[];
  friendList1: Friend[];
  friendList2: Friend[];
  friendList3: Friend[];

  constructor() {

    this.getListFromSev();
  }

  getListFromSev() {

    this.friendList1 = [
      {
        headImg: 'assets/imgs/head-img-1.jpeg',
        name: 'Woody',
        selfMark: "This town ain't big enough for the two of us!",
        lastChangeTime: '3:43 pm'
      },
      {
        headImg: 'assets/imgs/head-img-2.jpeg',
        name: 'Buzz Lightyear',
        selfMark: 'My eyeballs could have been sucked from their sockets!',
        lastChangeTime: '1:12 pm'
      },
      {
        headImg: 'assets/imgs/head-img-3.jpeg',
        name: 'Jessie',
        selfMark: "Well aren't you just the sweetest space toy I ever did meet!",
        lastChangeTime: '10:03 am'
      },
      {
        headImg: 'assets/imgs/head-img-4.jpeg',
        name: 'Mr. Potato Head',
        selfMark: "You're not turning me into a Mashed Potato.",
        lastChangeTime: '5:47 am'
      }
    ];
    this.friendList2 = [
      {
        headImg: 'assets/imgs/head-img-5.jpeg',
        name: 'Hamm',
        selfMark: "You heard of Kung Fu? Well get ready for pork chop.",
        lastChangeTime: '11:11 pm'
      },
      {
        headImg: 'assets/imgs/head-img-2.jpeg',
        name: 'Slinky Dog',
        selfMark: 'I may not be a smart dog, but I know what roadkill is.',
        lastChangeTime: '8:54 pm'
      },
      {
        headImg: 'assets/imgs/head-img-4.jpeg',
        name: 'Rex',
        selfMark: "Were you scared? Tell me honestly.",
        lastChangeTime: '7:22 am'
      },
      {
        headImg: 'assets/imgs/head-img-1.jpeg',
        name: 'Bullseye',
        selfMark: "Neigh!",
        lastChangeTime: '2:08 am'
      }
    ];
    this.friendList3 = [
      {
        headImg: 'assets/imgs/head-img-5.jpeg',
        name: 'Barbie',
        selfMark: "So, who's ready for Ken's dream tour?",
        lastChangeTime: 'Sun'
      },
      {
        headImg: 'assets/imgs/head-img-3.jpeg',
        name: 'Squeeze',
        selfMark: 'The claw is our master.',
        lastChangeTime: 'Fri'
      },
      {
        headImg: 'assets/imgs/head-img-3.jpeg',
        name: 'Sarge',
        selfMark: "Code Red, repeat: We're at Code Red!",
        lastChangeTime: 'Wed'
      }
    ];

    this.friendObj = [
      {
        headText: 'Today',
        talkingFriends: this.friendList1
      },
      {
        headText: 'Yesterday',
        talkingFriends: this.friendList2
      },
      {
        headText: 'Last Week',
        talkingFriends: this.friendList3
      },
    ];
  }

  getListDate() {
    return this.friendObj;
  }

}
