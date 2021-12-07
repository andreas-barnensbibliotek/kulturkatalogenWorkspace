import { App_Global } from './core/global/app_global';

import {KkAjPublicFormsModule} from 'kk-aj-public-forms';
import {AjApiServicesModule} from "aj-api-services"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestarComponent } from './testar/testar.component';
import { KkStartComponent } from './kk-start/kk-start.component';
import { MainSearchComponent } from './publicSearch/main-search/main-search.component';
import { MainArrFormComponent } from './kk-Forms/main-arr-form/main-arr-form.component';
import { Err404PageComponent } from './core/shared/err404-page/err404-page.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';
import { AjCarouselBlockComponent } from './core/shared/aj-carousel-block/aj-carousel-block.component';

@NgModule({
  declarations: [
    AppComponent,
    TestarComponent,
    KkStartComponent,
    MainSearchComponent,
    MainArrFormComponent,
    Err404PageComponent,
    AjCarouselBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KkAjPublicFormsModule,
    AjApiServicesModule,
    IvyCarouselModule,
    HttpClientModule
  ],
  providers: [
    App_Global
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
