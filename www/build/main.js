webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__implugin_im_area_component__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_friend__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pluginhome_pluginhome_component__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.talkArea = __WEBPACK_IMPORTED_MODULE_1__implugin_im_area_component__["a" /* ImArea */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__list_friend__["a" /* FriendList */];
        this.tabHomePage = __WEBPACK_IMPORTED_MODULE_4__pluginhome_pluginhome_component__["a" /* PluginHomePage */];
        this.tabsParams = navParams;
    }
    TabsPage.prototype.selectTalkingPage = function () {
        this.tabsParams.selectTab = 2;
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\angular4\IM_IonicClient\src\pages\plugintabs\plugintabs.html"*/'<ion-tabs class="im-tabs-style" [color]="royal" tabbarPlacement="bottom">\n  <ion-tab [root]="tabHomePage"tabIcon="home" [rootParams]="tabsParams"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="contacts"></ion-tab>\n  <ion-tab [root]="talkArea" tabBadge="3" tabIcon="chatbubbles" tabBadgeStyle="danger" [rootParams]="tabsParams" (ionSelect)="selectTalkingPage()"></ion-tab>\n  <ion-tab [root]="talkArea" tabBadge="3" tabIcon="chatbubbles" tabBadgeStyle="danger" [rootParams]="tabsParams"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"c:\angular4\IM_IonicClient\src\pages\plugintabs\plugintabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=plugintabs.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\angular4\IM_IonicClient\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"c:\angular4\IM_IonicClient\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"c:\angular4\IM_IonicClient\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"c:\angular4\IM_IonicClient\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.icons = 'camera';
        this.a = [];
        this.b = [];
        this.aTop = 0;
        this.bTop = 0;
        this.aIsMore = true;
        this.bIsMore = true;
        this.current = 1;
        for (var i = 0; i < 30; i++) {
            this.a.push('a' + this.a.length);
        }
        for (var i = 0; i < 30; i++) {
            this.b.push('b' + this.b.length);
        }
    }
    ContactPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            for (var i = 0; i < 30; i++) {
                if (_this.icons === 'camera') {
                    _this.a.push('a' + _this.a.length);
                }
                else {
                    _this.b.push('b' + _this.b.length);
                }
            }
            console.log('Async operation has ended');
            infiniteScroll.complete();
            if (_this.a.length > 70) {
                _this.aIsMore = false;
            }
            if (_this.b.length > 70) {
                _this.bIsMore = false;
            }
        }, 500);
    };
    ContactPage.prototype.abtn = function (index) {
        console.log(this.icons);
        if (this.current !== index) {
            this.bTop = this.ct.getContentDimensions().scrollTop;
        }
        this.current = index;
        this.ct.scrollTo(0, this.aTop, 0);
    };
    ContactPage.prototype.bbtn = function (index) {
        console.log(this.icons);
        if (this.current !== index) {
            this.aTop = this.ct.getContentDimensions().scrollTop;
        }
        this.current = index;
        this.ct.scrollTo(0, this.bTop, 0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('ct'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ContactPage.prototype, "ct", void 0);
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"c:\angular4\IM_IonicClient\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-toolbar>\n\n    <ion-segment [(ngModel)]="icons" color="secondary">\n\n      <ion-segment-button value="camera" (click)=\'abtn(1)\'>\n\n        <ion-icon name="camera"></ion-icon>\n\n      </ion-segment-button>\n\n      <ion-segment-button value="bookmark" (click)=\'bbtn(2)\'>\n\n        <ion-icon name="bookmark"></ion-icon>\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content #ct>\n\n  <div *ngIf="icons === \'camera\'">\n\n\n\n    <ion-list>\n\n        <ion-item *ngFor="let i of a">{{i}}</ion-item>\n\n      </ion-list>\n\n      \n\n      \n\n       \n\n  </div>\n\n\n\n  <div *ngIf="icons === \'bookmark\'">\n\n      \n\n          <ion-list>\n\n              <ion-item *ngFor="let i of b">{{i}}</ion-item>\n\n            </ion-list>\n\n            \n\n            <!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n              <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n            </ion-infinite-scroll> -->\n\n             \n\n        </div>\n\n        <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="(icons === \'camera\' && aIsMore) || (icons === \'bookmark\' && bIsMore)">\n\n            <ion-infinite-scroll-content></ion-infinite-scroll-content>\n\n          </ion-infinite-scroll>\n\n</ion-content>'/*ion-inline-end:"c:\angular4\IM_IonicClient\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"c:\angular4\IM_IonicClient\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h2>Welcome to Ionic!</h2>\n\n  <p>\n\n    This starter project comes with simple tabs-based layout for apps\n\n    that are going to primarily use a Tabbed UI.\n\n  </p>\n\n  <p>\n\n    Take a look at the <code>src/pages/</code> directory to add or change tabs,\n\n    update any existing page or create new pages.\n\n  </p>\n\n  <div style="display:flex" class="animation-area">\n\n      <div class="ball">ball</div>\n\n      <div class="square"></div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"c:\angular4\IM_IonicClient\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IHadSay */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImArea; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__im_area_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pluginroot_pluginroot_date_service__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// declare var marsChat;
var IHadSay = (function () {
    function IHadSay() {
    }
    return IHadSay;
}());

var ImArea = (function () {
    function ImArea(imAreaService, cd, navParams, pluginDateService) {
        var _this = this;
        this.imAreaService = imAreaService;
        this.cd = cd;
        this.navParams = navParams;
        this.pluginDateService = pluginDateService;
        this.mText = {
            me: 2,
            wts: ''
        };
        this.successCallback = function (data) {
            console.log("onMessageReceive Success ! ==> Content:" + data.msgcontent
                + " Topic:" + data.msgtopic + " From:" + data.msgfrom);
            if (data.msgcontent == undefined) {
                return;
            }
            _this.dialogs = _this.dialogs.concat([{
                    me: 1,
                    wts: data.msgcontent
                }]);
            _this.cd.detectChanges();
        };
        this.rootPar = navParams;
        this.viewContr = this.rootPar.get('viewCtrl');
        marsChat.onMessageReceive(this.successCallback);
        this.pluginDateSer = pluginDateService;
        // marsChat.onMessageReceive(this.successCallback);
    }
    ImArea.prototype.ionViewWillEnter = function () {
        if (this.pluginDateSer.getTalkingPersion() !== undefined) {
            this.friendObj = this.pluginDateSer.getTalkingPersion();
        }
    };
    ImArea.prototype.ngOnInit = function () {
        if (this.friendObj === undefined) {
            this.friendObj = {
                'headImg': 'assets/imgs/playerOne.jpg',
                'name': "I'm your servider",
                'selfMark': 'thank you for you come to use',
                'lastChangeTime': 'all day'
            };
        }
        this.getBeforeDialog();
    };
    ImArea.prototype.addWhatISay = function () {
        var tempText = {
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
        this.talkLeng = this.dialogs.length;
        marsChat.sendTextMessage({
            'to': 'all',
            'text': tempText.wts,
            'topic': '0'
        }, function () {
            console.log("sendTextMessage Success ! ==> ");
        }, function () {
            console.log("sendTextMessage Failed ! ==> ");
        });
    };
    ImArea.prototype.getBeforeDialog = function () {
        this.dialogs = this.imAreaService.getDialogs();
    };
    ImArea.prototype.dismissSelf = function () {
        this.viewContr.dismiss();
    };
    ImArea = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'im-area',template:/*ion-inline-start:"c:\angular4\IM_IonicClient\src\pages\implugin\im-area.html"*/'<div id="main-container" class="im-main-container">\n    <div id="dialog-area" class="im-dialog-area">\n        <div id="dialog-title" class="im-dialog-title">\n            <div id="target-name" class="im-target-name">\n                <div id="dialog-close" class="im-dialog-close">\n                    <ion-icon class="im-close-button" name="close" (click)="dismissSelf()"></ion-icon>\n                    <!-- <img class="im-close-button" src="../www/assets/imgs/close.png" (click)="dismissSelf()"> -->\n                </div>\n                <span>{{ friendObj.name }}</span>\n            </div>\n            <div id="title-button-area" class="im-title-button-area">\n                <button class="rkmd-btn btn-fab-mini btn-lightBlue ripple-effect im-email-icons">\n                </button>\n                <button class="rkmd-btn btn-fab-mini btn-cyan ripple-effect im-pen-icons">\n                </button>\n            </div>\n        </div>\n        <div id="dialog-target-head" class="im-dialog-target-head">\n            <img src="{{ friendObj.headImg }}">\n        </div>\n        <div id="talk-area" class="im-talk-area">\n            <ul class="chat-thread" [uiScorlToBottom]="talkLeng">\n                <li [ngClass]="{\'left-li\': dialog.me === 1, \'right-li\': dialog.me === 2}" *ngFor="let dialog of dialogs"><div>{{ dialog.wts }}</div></li>\n            </ul>\n        </div>\n        <div id="input-area" class="im-input-area">\n            <input class="im-input" [(ngModel)]="mText.wts"/>\n            <!-- <input class="im-input"/> -->\n            <div class="demo">\n                <button id="im-input-button" class="rkmd-btn btn-xs btn-lightBlue ripple-effect" (click)="addWhatISay()">send</button>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n'/*ion-inline-end:"c:\angular4\IM_IonicClient\src\pages\implugin\im-area.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__im_area_service__["a" /* ImAreaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__im_area_service__["a" /* ImAreaService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__pluginroot_pluginroot_date_service__["a" /* PluginDateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__pluginroot_pluginroot_date_service__["a" /* PluginDateService */]) === "function" && _d || Object])
    ], ImArea);
    return ImArea;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=im-area.component.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImAreaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImAreaService = (function () {
    function ImAreaService() {
        this.dialogs = [
            { me: 1, wts: 'Mr. Nice' },
            { me: 2, wts: 'Narco' }
        ];
    }
    ImAreaService.prototype.getDialogs = function () {
        return this.dialogs;
    };
    ImAreaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ImAreaService);
    return ImAreaService;
}());

//# sourceMappingURL=im-area.service.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluginRoot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugintabs_plugintabs_component__ = __webpack_require__(100);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PluginRoot = (function () {
    function PluginRoot(navParams, viewCtrl, alertCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__plugintabs_plugintabs_component__["a" /* TabsPage */];
        this.rootParams = __assign({}, this.navParams.data, { viewCtrl: this.viewCtrl });
        this.checkIfLogin(navParams.data.loginStatus);
    }
    PluginRoot.prototype.checkIfLogin = function (isLogin) {
        var _this = this;
        if (!isLogin) {
            var prompt_1 = this.alertCtrl.create({
                title: 'Login',
                message: "Enter a name and pass to the inputs",
                enableBackdropDismiss: false,
                inputs: [
                    {
                        name: 'user',
                        placeholder: 'user'
                    },
                    {
                        name: 'pass',
                        placeholder: 'password',
                        type: 'password'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function (data) {
                            _this.viewCtrl.dismiss();
                        }
                    },
                    {
                        text: 'OK',
                        handler: function (data) {
                            console.log('OK');
                        }
                    }
                ]
            });
            prompt_1.present();
        }
    };
    PluginRoot = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: '<ion-nav [root]="this.rootPage" [rootParams]="this.rootParams"></ion-nav>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PluginRoot);
    return PluginRoot;
}());

//# sourceMappingURL=pluginroot.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friend_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pluginroot_pluginroot_date_service__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FriendList = (function () {
    function FriendList(friendObjService, navParams, navCtrl, pluginDateService) {
        this.friendObjService = friendObjService;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.pluginDateService = pluginDateService;
        this.talkingLists = friendObjService.getListDate();
        this.rootPrams = navParams;
    }
    FriendList.prototype.toTalk = function (talkingFriend) {
        this.pluginDateService.setTalkingPersion(talkingFriend);
        this.navCtrl.parent.select(2);
    };
    FriendList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'friend-list',template:/*ion-inline-start:"c:\angular4\IM_IonicClient\src\pages\list\friend.html"*/'  <ion-header>\n\n\n\n  <ion-navbar>\n\n\n\n    <ion-title>Avatar List</ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content class="list-avatar-page im-friend-list-area">\n\n\n\n  <ion-list *ngFor="let talkingList of talkingLists">\n\n      <ion-list-header>{{talkingList.headText}}</ion-list-header>\n\n      <ion-item *ngFor="let talkingFriend of talkingList.talkingFriends" (click)="toTalk(talkingFriend)">\n\n        <ion-avatar item-start>\n\n          <img src="{{talkingFriend.headImg}}" tabBadge="3">\n\n        </ion-avatar>\n\n        <h2>{{talkingFriend.name}}</h2>\n\n        <p>{{talkingFriend.selfMark}}</p>\n\n        <ion-note item-end>{{talkingFriend.lastChangeTime}}</ion-note>\n\n      </ion-item>\n\n  </ion-list>\n\n\n\n  <!-- <ion-list>\n\n\n\n\n\n\n\n    <ion-list-header>Today</ion-list-header>\n\n\n\n\n\n\n\n    <ion-item>\n\n\n\n      <ion-avatar item-start>\n\n\n\n        <img src="assets/imgs/head-img-1.jpeg">\n\n\n\n      </ion-avatar>\n\n\n\n      <h2>Woody</h2>\n\n\n\n      <p>This town ain\'t big enough for the two of us!</p>\n\n\n\n      <ion-note item-end>3:43 pm</ion-note>\n\n\n\n    </ion-item>\n\n\n\n\n\n\n\n    <ion-item>\n\n\n\n      <ion-avatar item-start>\n\n\n\n        <img src="assets/imgs/head-img-2.jpeg">\n\n\n\n      </ion-avatar>\n\n\n\n      <h2>Buzz Lightyear</h2>\n\n\n\n      <p>My eyeballs could have been sucked from their sockets!</p>\n\n\n\n      <ion-note item-end>1:12 pm</ion-note>\n\n\n\n    </ion-item>\n\n\n\n\n\n\n\n    <ion-item>\n\n\n\n      <ion-avatar item-start>\n\n\n\n        <img src="assets/imgs/head-img-3.jpeg">\n\n\n\n      </ion-avatar>\n\n\n\n      <h2>Jessie</h2>\n\n\n\n      <p>Well aren\'t you just the sweetest space toy I ever did meet!</p>\n\n\n\n      <ion-note item-end>10:03 am</ion-note>\n\n\n\n    </ion-item>\n\n\n\n\n\n\n\n    <ion-item>\n\n\n\n      <ion-avatar item-start>\n\n\n\n        <img src="assets/imgs/head-img-4.jpeg">\n\n\n\n      </ion-avatar>\n\n\n\n      <h2>Mr. Potato Head</h2>\n\n\n\n      <p>You\'re not turning me into a Mashed Potato.</p>\n\n\n\n      <ion-note item-end>5:47 am</ion-note>\n\n\n\n    </ion-item>\n\n\n\n\n\n\n\n  </ion-list>\n\n\n\n\n\n\n\n  <ion-list>\n\n\n\n\n\n\n\n    <ion-list-header>Yesterday</ion-list-header>\n\n\n\n\n\n\n\n    <ion-item>\n\n\n\n      <ion-avatar item-start>\n\n\n\n        <img src="assets/imgs/head-img-5.jpeg">\n\n\n\n      </ion-avatar>\n\n\n\n      <h2>Hamm</h2>\n\n\n\n      <p>You heard of Kung Fu? Well get ready for pork chop.</p>\n\n\n\n      <ion-note item-end>11:11 pm</ion-note>\n\n\n\n    </ion-item>\n\n\n\n\n\n\n\n    <ion-item>\n\n\n\n      <ion-avatar item-start>\n\n\n\n        <img src="assets/imgs/head-img-2.jpeg">\n\n\n\n      </ion-avatar>\n\n\n\n      <h2>Slinky Dog</h2>\n\n\n\n      <p>I may not be a smart dog, but I know what roadkill is.</p>\n\n\n\n      <ion-note item-end>8:54 pm</ion-note>\n\n\n\n    </ion-item>\n\n\n\n\n\n\n\n    <ion-item>\n\n\n\n      <ion-avatar item-start>\n\n\n\n        <img src="assets/imgs/head-img-4.jpeg">\n\n\n\n      </ion-avatar>\n\n\n\n      <h2>Rex</h2>\n\n\n\n      <p>Were you scared? Tell me honestly.</p>\n\n\n\n      <ion-note item-end>7:22 am</ion-note>\n\n\n\n    </ion-item>\n\n\n\n\n\n\n\n    <ion-item>\n\n\n\n      <ion-avatar item-start>\n\n\n\n        <img src="assets/imgs/head-img-3.jpeg">\n\n\n\n      </ion-avatar>\n\n\n\n      <h2>Bullseye</h2>\n\n\n\n      <p>Neigh!</p>\n\n\n\n      <ion-note item-end>2:08 am</ion-note>\n\n\n\n    </ion-item>\n\n\n\n\n\n\n\n  </ion-list>\n\n\n\n\n\n\n\n  <ion-list>\n\n\n\n\n\n\n\n    <ion-list-header>Last Week</ion-list-header>\n\n\n\n\n\n\n\n    <ion-item>\n\n\n\n      <ion-avatar item-start>\n\n\n\n        <img src="assets/imgs/head-img-2.jpeg">\n\n\n\n      </ion-avatar>\n\n\n\n      <h2>Barbie</h2>\n\n\n\n      <p>So, who\'s ready for Ken\'s dream tour?</p>\n\n\n\n      <ion-note item-end>Sun</ion-note>\n\n\n\n    </ion-item>\n\n\n\n\n\n\n\n    <ion-item>\n\n\n\n      <ion-avatar item-start>\n\n\n\n        <img src="assets/imgs/head-img-6.jpeg">\n\n\n\n      </ion-avatar>\n\n\n\n      <h2>Squeeze</h2>\n\n\n\n      <p>The claw is our master.</p>\n\n\n\n      <ion-note item-end>Fri</ion-note>\n\n\n\n    </ion-item>\n\n\n\n\n\n\n\n    <ion-item>\n\n\n\n      <ion-avatar item-start>\n\n\n\n        <img class="list-head-img" src="assets/imgs/head-img-5.jpeg">\n\n\n\n      </ion-avatar>\n\n\n\n      <h2>Sarge</h2>\n\n\n\n      <p>Code Red, repeat: We\'re at Code Red!</p>\n\n\n\n      <ion-note item-end>Wed</ion-note>\n\n\n\n    </ion-item>\n\n\n\n\n\n\n\n    <ion-item>\n\n\n\n      <ion-avatar item-start>\n\n\n\n        <img src="assets/img/avatar-ts-bopeep.png">\n\n\n\n      </ion-avatar>\n\n\n\n      <h2>Bo Peep</h2>\n\n\n\n      <p>What would you say if I get someone else to watch the sheep for me tonight?</p>\n\n\n\n      <ion-note item-end>Mon</ion-note>\n\n\n\n    </ion-item>\n\n\n\n\n\n\n\n  </ion-list> -->\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"c:\angular4\IM_IonicClient\src\pages\list\friend.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__friend_service__["a" /* FriendObjService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__pluginroot_pluginroot_date_service__["a" /* PluginDateService */]])
    ], FriendList);
    return FriendList;
}());

//# sourceMappingURL=friend.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendObjService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FriendObjService = (function () {
    function FriendObjService() {
        this.getListFromSev();
    }
    FriendObjService.prototype.getListFromSev = function () {
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
    };
    FriendObjService.prototype.getListDate = function () {
        return this.friendObj;
    };
    FriendObjService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FriendObjService);
    return FriendObjService;
}());

//# sourceMappingURL=friend.service.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluginHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PluginHomePage = (function () {
    function PluginHomePage() {
    }
    PluginHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\angular4\IM_IonicClient\src\pages\pluginhome\pluginhome.html"*/'<div class="plugin-home-img">\n\n    <p>Welcome to the IM</p>\n\n    <img src="../../assets/imgs/3.gif" >\n\n</div>'/*ion-inline-end:"c:\angular4\IM_IonicClient\src\pages\pluginhome\pluginhome.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PluginHomePage);
    return PluginHomePage;
}());

//# sourceMappingURL=pluginhome.component.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertServices = (function () {
    function AlertServices() {
    }
    AlertServices.prototype.getLoginStatus = function () {
        this.isLogin = false;
        return this.isLogin;
    };
    AlertServices = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AlertServices);
    return AlertServices;
}());

//# sourceMappingURL=alert-icon.services.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_pluginroot_pluginroot_module__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_alerticon_alert_icon_module__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__pages_alerticon_alert_icon_module__["a" /* AlertAreaModule */],
                __WEBPACK_IMPORTED_MODULE_10__pages_pluginroot_pluginroot_module__["a" /* PluginModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            try {
                console.log("Init initPlatform Start!!");
                marsChat.initPlatform({
                    'userName': 'Marven',
                    'host': '10.204.13.145'
                }, function () {
                    console.log("MarsPlatform ==>  Init Success !");
                });
            }
            catch (error) {
                console.log("Oooops MarsPlatform ==> Init error !" + error);
            }
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\angular4\IM_IonicClient\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n<!-- <im-area></im-area> -->\n<!-- <plugin-area></plugin-area> -->\n<alert-area></alert-area>\n'/*ion-inline-end:"c:\angular4\IM_IonicClient\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__implugin_im_area_component__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__implugin_im_area_service__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pluginroot_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__plugintabs_plugintabs_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_friend__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__implugin_im_area_directive__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_loginpage_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__list_friend_service__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pluginhome_pluginhome_component__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pluginroot_date_service__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PluginModule = (function () {
    function PluginModule() {
    }
    PluginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__implugin_im_area_component__["a" /* ImArea */],
                __WEBPACK_IMPORTED_MODULE_5__plugintabs_plugintabs_component__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pluginroot_component__["a" /* PluginRoot */],
                __WEBPACK_IMPORTED_MODULE_6__list_friend__["a" /* FriendList */],
                __WEBPACK_IMPORTED_MODULE_7__implugin_im_area_directive__["a" /* HighlightDirective */],
                __WEBPACK_IMPORTED_MODULE_8__login_loginpage_component__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pluginhome_pluginhome_component__["a" /* PluginHomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__plugintabs_plugintabs_component__["a" /* TabsPage */])
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__implugin_im_area_component__["a" /* ImArea */],
                __WEBPACK_IMPORTED_MODULE_5__plugintabs_plugintabs_component__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pluginroot_component__["a" /* PluginRoot */],
                __WEBPACK_IMPORTED_MODULE_6__list_friend__["a" /* FriendList */],
                __WEBPACK_IMPORTED_MODULE_8__login_loginpage_component__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pluginhome_pluginhome_component__["a" /* PluginHomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__implugin_im_area_service__["a" /* ImAreaService */],
                __WEBPACK_IMPORTED_MODULE_9__list_friend_service__["a" /* FriendObjService */],
                __WEBPACK_IMPORTED_MODULE_11__pluginroot_date_service__["a" /* PluginDateService */]
            ]
        })
    ], PluginModule);
    return PluginModule;
}());

//# sourceMappingURL=pluginroot.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = (function () {
    function HighlightDirective(el) {
        this.el = el;
    }
    HighlightDirective.prototype.ngOnChanges = function (dialogLengthNum) {
        var _this = this;
        //   alert(this.el);
        setTimeout(function () {
            _this.el.nativeElement.scrollTop = _this.el.nativeElement.scrollHeight + _this.el.nativeElement.scrollHeight - _this.lastHeight;
            _this.lastHeight = _this.el.nativeElement.scrollHeight;
        }, 0);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('uiScorlToBottom'),
        __metadata("design:type", Number)
    ], HighlightDirective.prototype, "dialogLengthNum", void 0);
    HighlightDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[uiScorlToBottom]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], HighlightDirective);
    return HighlightDirective;
}());

//# sourceMappingURL=im-area.directive.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plugintabs_plugintabs_component__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(navParams, navCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.tabsParams = navParams;
    }
    LoginPage.prototype.changeComponent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__plugintabs_plugintabs_component__["a" /* TabsPage */], this.tabsParams);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"c:\angular4\IM_IonicClient\src\pages\login\loginpage.html"*/'<ion-card>\n\n        <img src="img/nin-live.png"/>\n\n        <ion-card-content>\n\n          <ion-card-title>\n\n            Nine Inch Nails Live\n\n            </ion-card-title>\n\n            <button (click)="changeComponent()">click me</button>\n\n        </ion-card-content>\n\n      </ion-card>'/*ion-inline-end:"c:\angular4\IM_IonicClient\src\pages\login\loginpage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=loginpage.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertAreaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_icon_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_icon_services__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlertAreaModule = (function () {
    function AlertAreaModule() {
    }
    AlertAreaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__alert_icon_component__["a" /* AlertArea */],
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__alert_icon_component__["a" /* AlertArea */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__alert_icon_services__["a" /* AlertServices */]
            ]
        })
    ], AlertAreaModule);
    return AlertAreaModule;
}());

//# sourceMappingURL=alert-icon.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertArea; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pluginroot_pluginroot_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_icon_services__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { AlertServices } from "./alert-icon.services";
var AlertArea = (function () {
    function AlertArea(modalCtrl, alertServices) {
        this.modalCtrl = modalCtrl;
        this.alertServices = alertServices;
    }
    AlertArea.prototype.toTalkPage = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pluginroot_pluginroot_component__["a" /* PluginRoot */], { loginStatus: this.alertServices.getLoginStatus() });
        modal.present();
    };
    AlertArea = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'alert-area',template:/*ion-inline-start:"c:\angular4\IM_IonicClient\src\pages\alerticon\alert-icon.html"*/'<div class="alert-icon-area">\n\n    <button class="rkmd-btn btn-fab btn-lightBlue ripple-effect" (click)="toTalkPage()"><i class="material-icons">IM</i>\n\n    </button>\n\n</div>'/*ion-inline-end:"c:\angular4\IM_IonicClient\src\pages\alerticon\alert-icon.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__alert_icon_services__["a" /* AlertServices */]])
    ], AlertArea);
    return AlertArea;
}());

//# sourceMappingURL=alert-icon.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PluginDateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PluginDateService = (function () {
    function PluginDateService() {
    }
    PluginDateService.prototype.getTalkingPersion = function () {
        return this.talkingFriend;
    };
    PluginDateService.prototype.setTalkingPersion = function (friendSelect) {
        this.talkingFriend = friendSelect;
    };
    PluginDateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PluginDateService);
    return PluginDateService;
}());

//# sourceMappingURL=pluginroot.date.service.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map