import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImArea } from '../implugin/im-area.component';
import { ImAreaService } from "../implugin/im-area.service";
import { PluginRoot } from "./pluginroot.component";
import { TabsPage } from "../plugintabs/plugintabs.component";

@NgModule({
  declarations: [
    ImArea,
    TabsPage,
    PluginRoot
  ],
  imports: [
    IonicPageModule.forChild(TabsPage)
  ],
  entryComponents: [
    ImArea,
    TabsPage,
    PluginRoot
  ],
  providers: [
    ImAreaService
  ]
})
export class PluginModule {}
