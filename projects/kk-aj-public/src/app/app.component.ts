import { App_Global } from './core/global/app_global';
import { Component, Inject, Injector, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { NgcCookieConsentService, NgcInitializeEvent, NgcNoCookieLawEvent, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy  {
  title = 'kkAjPublic';
//keep refs to subscriptions to be able to unsubscribe later
  //keep refs to subscriptions to be able to unsubscribe later
  private popupOpenSubscription!: Subscription;
private popupCloseSubscription!: Subscription;
private initializeSubscription!: Subscription;
private statusChangeSubscription!: Subscription;
private revokeChoiceSubscription!: Subscription;
private noCookieLawSubscription!: Subscription;
private ccService: any;
constructor(
  private glb:App_Global,
  private readonly injector: Injector,
  @Inject(PLATFORM_ID) private platformId:any,
  ){

    if (!isPlatformServer(this.platformId)) {
      this.ccService = this.injector.get(NgcCookieConsentService);
    }

  }

ngOnInit() {
  if (!isPlatformServer(this.platformId)) {
  // subscribe to cookieconsent observables to react to main events
  this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
    () => {
      // you can use this.ccService.getConfig() to do stuff...
    });

  this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
    () => {
      // you can use this.ccService.getConfig() to do stuff...
    });

  this.initializeSubscription = this.ccService.initialize$.subscribe(
    (event: NgcInitializeEvent) => {
      // you can use this.ccService.getConfig() to do stuff...
    });

  this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
    (event: NgcStatusChangeEvent) => {
      // you can use this.ccService.getConfig() to do stuff...
      localStorage.clear();
      console.log("storage is cleard")
      this.glb.deleteAllCookies();
    });

  this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
    () => {
      // you can use this.ccService.getConfig() to do stuff...
    });

    this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
    (event: NgcNoCookieLawEvent) => {
      // you can use this.ccService.getConfig() to do stuff...
    });
  }
}
ngOnChanges(){
  console.log("plattform" +isPlatformServer(this.platformId));
  if (!isPlatformServer(this.platformId)) {
  // this.initcookie();
  }
}
ngOnDestroy() {
  if (!isPlatformServer(this.platformId)) {
  // unsubscribe to cookieconsent observables to prevent memory leaks
  this.popupOpenSubscription.unsubscribe();
  this.popupCloseSubscription.unsubscribe();
  this.initializeSubscription.unsubscribe();
  this.statusChangeSubscription.unsubscribe();
  this.revokeChoiceSubscription.unsubscribe();
  this.noCookieLawSubscription.unsubscribe();
  }
}

initcookie(){
  // subscribe to cookieconsent observables to react to main events
  this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
    () => {
      // you can use this.ccService.getConfig() to do stuff...
    });

  this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
    () => {
      // you can use this.ccService.getConfig() to do stuff...
    });

  this.initializeSubscription = this.ccService.initialize$.subscribe(
    (event: NgcInitializeEvent) => {
      // you can use this.ccService.getConfig() to do stuff...
    });

  this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
    (event: NgcStatusChangeEvent) => {
      // you can use this.ccService.getConfig() to do stuff...
      localStorage.clear();
      console.log("storage is cleard")
      this.glb.deleteAllCookies();
    });

  this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
    () => {
      // you can use this.ccService.getConfig() to do stuff...
    });

    this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
    (event: NgcNoCookieLawEvent) => {
      // you can use this.ccService.getConfig() to do stuff...
    });
  }

}


