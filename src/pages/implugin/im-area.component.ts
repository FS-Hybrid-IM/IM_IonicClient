import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {ImAreaService} from "./im-area.service";
import { Dialogs } from "./dialog";
declare var marsChat;

export class IHadSay {
  me: number;
  wts: string;
}

@Component({
  selector: 'im-area',
  templateUrl: 'im-area.html'
})
export class ImArea {

  dialogs: Dialogs[];

  mText: IHadSay = {
    me: 2,
    wts: ''
  };

  constructor(private imAreaService: ImAreaService, private cd: ChangeDetectorRef) {
    marsChat.onMessageReceive(this.successCallback);
  }

  ngOnInit() {
    this.getBeforeDialog();
  }

  addWhatISay(): void {
    let tempText: IHadSay = {
      me: 2,
      wts: ''
    };
    tempText.me = this.mText.me;
    tempText.wts = this.mText.wts;
    if (tempText.wts === '' || tempText.wts === null) {
      return;
    }
    this.dialogs.push(tempText);
    this.mText.wts = '';

    marsChat.sendTextMessage({
        'to': 'all',
        'text': tempText.wts,
        'topic': '0'
    }, function () {
        console.log("sendTextMessage Success ! ==> ");
    }, function () {
        console.log("sendTextMessage Failed ! ==> ");
    });
}

  getBeforeDialog(): void {
    this.dialogs = this.imAreaService.getDialogs();
  }

  public successCallback = (data: any) => {

    console.log("onMessageReceive Success ! ==> Content:" + data.msgcontent
      + " Topic:" + data.msgtopic + " From:" + data.msgfrom);

    if (data.msgcontent == undefined) {
      return;
    }

    this.dialogs = this.dialogs.concat([{
      me: 1,
      wts: data.msgcontent
    }]);
    this.cd.detectChanges();
  }
  
}
