import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public icons: string = 'camera';

  @ViewChild('ct')
  public ct: Content;

  public a: any[] = [];
  public b: any[] = [];

  public aTop = 0;
  public bTop = 0;
 
  public aIsMore = true;
  public bIsMore = true;

  public current: number = 1;

  constructor(public navCtrl: NavController) {
    for (let i = 0; i < 30; i++) {
      this.a.push( 'a' + this.a.length );
    }

    for (let i = 0; i < 30; i++) {
      this.b.push( 'b' + this.b.length );
    }
  }

  doInfinite(infiniteScroll) {

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        if (this.icons === 'camera') {
          this.a.push( 'a' + this.a.length );
        } else {
          this.b.push( 'b' + this.b.length );
        }
        
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();

      if (this.a.length > 70) {
        this.aIsMore = false;
      }

      if (this.b.length > 70) {
        this.bIsMore = false;
      }

    }, 500);
  }

  public abtn(index) {
    console.log(this.icons);
    if (this.current !== index) {
      this.bTop = this.ct.getContentDimensions().scrollTop;
    }
    this.current = index;
    this.ct.scrollTo(0, this.aTop, 0);
  }

  public bbtn(index) {
    console.log(this.icons);
    if (this.current !== index) {
      this.aTop = this.ct.getContentDimensions().scrollTop;
    }
    this.current = index;
    this.ct.scrollTo(0, this.bTop, 0);
  }



}
