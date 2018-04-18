import { Component } from '@angular/core';
import { ImArea } from "../implugin/im-area.component";
import { ContactPage } from "../contact/contact";


@Component({
  templateUrl: 'plugintabs.html'
})
export class TabsPage {

  talkArea = ImArea;
  tab3Root = ContactPage;

  constructor() {

  }
}
