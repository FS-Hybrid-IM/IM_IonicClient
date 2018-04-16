import { Injectable } from '@angular/core';
import { Dialogs } from "./dialog";

@Injectable()
export class ImAreaService {

  dialogs: Dialogs[];

  constructor() {
    this.dialogs = [
      { me: 1, wts: 'Mr. Nice' },
      { me: 2, wts: 'Narco' }
    ];
  }

  getDialogs(): Dialogs[] {
    return this.dialogs;
  }

}
