import { Injectable } from '@angular/core';
import { Friend } from "../list/friendobj";

@Injectable()
export class PluginDateService {

    talkingFriend: Friend;

    constructor() {

    }

    getTalkingPersion(): Friend {
        return this.talkingFriend;
    }

    setTalkingPersion(friendSelect: Friend): void {
        this.talkingFriend = friendSelect;
    }

}