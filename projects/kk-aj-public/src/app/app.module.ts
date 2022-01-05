import { FaktaComponent } from './../app/core/shared/arr-details/fakta/fakta.component';
import { MainFooterComponent } from './core/shared/main-footer/main-footer.component';
import { NavigationServiceService } from './core/services/NavigationService/navigation-service.service';

import { categoryStyles } from './core/models/categoryStyles';
import { Global } from './core/models/global';
import { MediaexempelComponent } from './../app/core/shared/arr-details/mediaexempel/mediaexempel.component';
import { KontaktComponent } from './core/shared/arr-details/kontakt/kontakt.component';
import { UnescapePipe } from './core/pipes/unescape.pipe';
import { KatalogenMainComponent } from './kk-AdvSearch/katalogen-main/katalogen-main.component';
import { ScrollToTopComponent } from './core/shared/scroll-to-top/scroll-to-top.component';
import { PageCountPipe } from './core/pipes/page-count.pipe';
import { CustomFilterPipe } from './core/pipes/custom-filter.pipe';
import { DetailpageComponent } from './kk-AdvSearch/detailpage/detailpage/detailpage.component';
import { MainpageComponent } from './kk-AdvSearch/mainpage/mainpage/mainpage.component';
import { App_Global } from './core/global/app_global';

import {KkAjPublicFormsModule} from 'kk-aj-public-forms';
import {AjApiServicesModule} from "aj-api-services"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestarComponent } from './testar/testar.component';
import { KkStartComponent } from './kk-start/kk-start.component';
import { MainArrFormComponent } from './kk-Forms/main-arr-form/main-arr-form.component';
import { Err404PageComponent } from './core/shared/err404-page/err404-page.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { HttpClientModule } from '@angular/common/http';
import { AjCarouselBlockComponent } from './core/shared/aj-carousel-block/aj-carousel-block.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { KkResultsComponent } from './kk-results/kk-results.component';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';
import { ArrDetailsComponent } from './core/shared/arr-details/arr-details.component';
import { KkResultDetailsComponent } from './kk-results/kk-result-details/kk-result-details.component';
import { VideoFixPipe } from './core/pipes/video-fix.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost' //'localhost'// it is recommended to set your domain, for cookies to work properly
  },
  palette: {
    popup: {
      background: '#222'
    },
    button: {
      background: '#111'
    }
  },
  theme: 'classic',
  type: 'opt-out',
  layout: 'my-custom-layout',
  layouts: {
    "my-custom-layout": '{{messagelink}}{{compliance}}'
  },
  elements:{
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}}<p>
      <a aria-label="learn more about cookies" class="cc-link" href="{{cookiePolicyHref}}" target="_blank" rel="noreferrer">{{cookiePolicyLink}}</a>
      </p></span>
    `,
  },
  content:{
    message: 'På guidepublikutveckling.se använder vi cookies för att ge dig en bra användarupplevelse. Genom att använda cookies så slipper du som användare registrera dej flera gånger för att få tillgång till guiden. Väljer du att Tillåta kakor/coockies på vår webplats, godkänner du att vi använder cookies och browserstorage.',

    cookiePolicyLink: 'Läs mer om cookie/kakor',
    cookiePolicyHref: 'https://www.cookiesandyou.com/',

    privacyPolicyLink: 'Privacy Policy',
    privacyPolicyHref: 'https://privacy.com',

    tosLink: 'hantering av Service',
    tosHref: 'https://www.vgregion.se/kulturutveckling',
    header: 'Kakor används på denna webbplats. Cookies used on the website!',
    dismiss: 'avböj!',
    allow: 'Tillåt kakor/ cookies',
    deny: 'Avböj',
    link: 'läs mer',
    policy: 'Kakor Policy'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    TestarComponent,
    KkStartComponent,
    MainArrFormComponent,
    Err404PageComponent,
    AjCarouselBlockComponent,
    MainpageComponent,
    DetailpageComponent,
    CustomFilterPipe,
    PageCountPipe,
    ScrollToTopComponent,
    KatalogenMainComponent,
    UnescapePipe,
    FaktaComponent,
    KontaktComponent,
    MediaexempelComponent,
    KkResultsComponent,
    MainFooterComponent,
    ArrDetailsComponent,
    KkResultDetailsComponent,
    VideoFixPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KkAjPublicFormsModule,
    AjApiServicesModule,
    IvyCarouselModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxBootstrapSliderModule,
    AutocompleteLibModule,
    FormsModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    NgbModule,

  ],
  providers: [
    App_Global,
    Global,
    categoryStyles,
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    NavigationServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
