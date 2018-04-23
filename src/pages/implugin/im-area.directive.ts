import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[uiScorlToBottom]'
})
export class HighlightDirective {

    lastHeight: number;
  constructor(private el: ElementRef) { }

  @Input('uiScorlToBottom') dialogLengthNum: number;

  ngOnChanges(dialogLengthNum) {
    //   alert(this.el);
        setTimeout( () => {
            this.el.nativeElement.scrollTop = this.el.nativeElement.scrollHeight + this.el.nativeElement.scrollHeight - this.lastHeight;
            this.lastHeight = this.el.nativeElement.scrollHeight;
        }, 0);
      
    }

//   @HostListener('mouseenter') onMouseEnter() {
//     this.highlight(this.highlightColor || 'red');
//   }

//   @HostListener('mouseleave') onMouseLeave() {
//     this.highlight(null);
//   }

//   private highlight(color: string) {
//     this.el.nativeElement.style.backgroundColor = color;
//   }
}