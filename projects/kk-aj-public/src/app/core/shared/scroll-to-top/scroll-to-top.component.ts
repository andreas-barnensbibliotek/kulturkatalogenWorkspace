import { DOCUMENT, ViewportScroller } from '@angular/common';
import { Component, OnInit, Inject, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {

  windowScrolled: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document, private viewportScroller:ViewportScroller) {}
  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop > 400) {

          this.windowScrolled = true;
      }
     else if (this.windowScrolled && window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop < 100) {
          this.windowScrolled = false;
      }
  }
  scrollToTop(Elementid:string) {
    this.viewportScroller.scrollToAnchor(Elementid)
  }
  ngOnInit() {}
}
