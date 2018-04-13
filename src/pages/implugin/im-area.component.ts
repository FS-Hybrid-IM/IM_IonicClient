import { Component, OnInit } from '@angular/core';
import {ImAreaService} from "./im-area.service";
import { Dialogs } from "./dialog";

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

  constructor(private imAreaService: ImAreaService) {

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
  }

  getBeforeDialog(): void {
    this.dialogs = this.imAreaService.getDialogs();
  }
}
