import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImArea } from '../implugin/im-area.component';
import { ImAreaService } from "../implugin/im-area.service";
import { PluginRoot } from "./pluginroot.component";
import { TabsPage } from "../plugintabs/plugintabs.component";
import { FriendList } from "../list/friend";
import { HighlightDirective } from "../implugin/im-area.directive";
import { LoginPage } from "../login/loginpage.component";
import { FriendObjService } from "../list/friend.service";
import { PluginHomePage } from "../pluginhome/pluginhome.component";

@NgModule({
  declarations: [
    ImArea,
    TabsPage,
    PluginRoot,
    FriendList,
    HighlightDirective,
    LoginPage,
    PluginHomePage
  ],
  imports: [
    IonicPageModule.forChild(TabsPage)
  ],
  entryComponents: [
    ImArea,
    TabsPage,
    PluginRoot,
    FriendList,
    LoginPage,
    PluginHomePage
  ],
  providers: [
    ImAreaService,
    FriendObjService
  ]
})
export class PluginModule {}
