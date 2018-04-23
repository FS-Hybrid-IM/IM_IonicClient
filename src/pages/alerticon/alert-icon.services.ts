import { Injectable } from '@angular/core';

@Injectable()
export class AlertServices {

    isLogin: boolean;
    constructor() {
    }

    getLoginStatus(): boolean {
            this.isLogin = false;
            return this.isLogin;
    }

}
