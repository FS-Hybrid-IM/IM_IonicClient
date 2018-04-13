import { Injectable } from '@angular/core';
import { Dialogs } from "./dialog";

@Injectable()
export class ImAreaService {

  dialogs: Dialogs[];

  constructor() {
    this.dialogs = [
      { me: 1, wts: 'Mr. Nice' },
      { me: 2, wts: 'Narco' },
      { me: 1, wts: 'Bombasto' },
      { me: 2, wts: 'Celeritas' },
      { me: 1, wts: 'Magneta' },
      { me: 1, wts: 'RubberMan' },
      { me: 2, wts: 'Dynama' },
      { me: 1, wts: 'Dr IQ' },
      { me: 2, wts: 'Magma' },
      { me: 2, wts: 'Tornado' }
    ];
  }

  getDialogs(): Dialogs[] {
    return this.dialogs;
  }

}
