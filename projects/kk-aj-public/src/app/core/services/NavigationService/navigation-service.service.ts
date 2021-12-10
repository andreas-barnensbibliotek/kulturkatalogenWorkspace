import { Router, NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {
  private history: string[] = []

  constructor(private router: Router, private location: LocationStrategy) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd ) {
        this.history.push(event.urlAfterRedirects)
      }
    })
  }

  back(): void {
    this.history.pop()
    if (this.history.length > 0) {
      // this.location.back()
      this.router.navigateByUrl(this.history.slice(-1)[0])
    } else {
      this.router.navigateByUrl('/')
    }
  }
}
