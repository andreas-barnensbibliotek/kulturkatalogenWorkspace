import { FaktalistModel } from './forms/MODELformGroup/FaktalistModel';
import { PostFormModel } from './forms/MODELformGroup/PostFormModel';
import { postFormDataModel } from './forms/MODELformGroup/postFormDataModel';
import { FormDataModel } from './forms/MODELformGroup/FormDataModel';
import { UtstallFaktaComponent } from './forms/Arrangemangstyp/utstallning/utstall-fakta/utstall-fakta.component';
import { formGlobalsModel } from './forms/MODELformGroup/formGlobalsModel';
import { Routes, RouterModule } from '@angular/router';
import { ServerApiResponsModel } from './forms/MODELformGroup/ServerApiResponsModel';
import { getTidigareModule } from './forms/MODELformGroup/getTidigareModule';
import { FormFaktaModel } from './forms/MODELformGroup/FormFaktaModel';
import { FormArrangemangModel } from './forms/MODELformGroup/FormArrangemangModel';
import { FormVisaBlockHandlerModel } from './forms/MODELformGroup/FormVisaBlockHandlerModel';
import { formKontaktModel } from './forms/MODELformGroup/formKontaktModel';
import { formUtovareModel } from './forms/MODELformGroup/formUtovareModel';
import { ImageUploaderModule } from 'ngx-image-uploader-next';

import { BrowserModule } from '@angular/platform-browser';
import { TidigareArrangemangComponent } from './forms/2_steg/tidigare-arrangemang/tidigare-arrangemang.component';
import { ValjUtovareComponent } from './forms/1_steg/valj-utovare/valj-utovare.component';
import { BedomningInfoComponent } from './forms/bedomning-info/bedomning-info.component';
import { SmakprovComponent } from './forms/smakprov/smakprov.component';
import { KontaktPersonComponent } from './forms/1_steg/kontakt-person/kontakt-person.component';
import { TidigareUtovareComponent } from './forms/1_steg/tidigare-utovare/tidigare-utovare.component';
import { NyUtovareComponent } from './forms/1_steg/ny-utovare/ny-utovare.component';
import { ValArrangemangsTypComponent } from './forms/val-arrangemangs-typ/val-arrangemangs-typ.component';
import { KostnaderComponent } from './forms/kostnader/kostnader.component';
import { DeltagarepublikComponent } from './forms/deltagarepublik/deltagarepublik.component';
import { LokalComponent } from './forms/lokal/lokal.component';
import { FaktaComponent } from './forms/fakta/fakta.component';
import { ImageuploadAJComponent } from './forms/imageupload-aj/imageupload-aj.component';
import { BaseformComponent } from './forms/baseform/baseform.component';
import { NgModule } from '@angular/core';
import { KkAjPublicFormsComponent } from './kk-aj-public-forms.component';
import { TestarformComponent } from './testarform/testarform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';
import { FormExempelModel } from './forms/MODELformGroup/FormExempelModel';
import { BesoksmalComponent } from './forms/Arrangemangstyp/besoksmal/besoksmal.component';
import { ForestallningComponent } from './forms/Arrangemangstyp/forestallning/forestallning.component';
import { UtstallningComponent } from './forms/Arrangemangstyp/utstallning/utstallning.component';
import { SkolbioComponent } from './forms/Arrangemangstyp/skolbio/skolbio.component';
import { WorkshopComponent } from './forms/Arrangemangstyp/workshop/workshop.component';
import { NgbDatepicker, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListasmakprovComponent } from './forms/smakprov/listasmakprov/listasmakprov.component';
import { SafeHtmlPipe } from './forms/pipes/safepipe';
import { NgxDynamicTabindexModule } from 'ngx-dynamic-tabindex';
import { CommonModule } from '@angular/common';
import { ArrFormComponent } from './forms/arr-form/arr-form.component';
import { UtstallLokalComponent } from './forms/Arrangemangstyp/utstallning/utstall-lokal/utstall-lokal.component';
import { ArrStartComponent } from './forms/arr-start/arr-start.component';
import { DeltagarepublikSkolbioComponent } from './forms/deltagarepublik/deltagarepublik-skolbio/deltagarepublik-skolbio.component';
import { LokalSkolbioComponent } from './forms/lokal/lokal-skolbio/lokal-skolbio.component';
import { FaktaSkolbioComponent } from './forms/fakta/fakta-skolbio/fakta-skolbio.component';
import { KostnaderSkolbioComponent } from './forms/kostnader/kostnader-skolbio/kostnader-skolbio.component';
import { DeltagarepublikBesoksmalComponent } from './forms/deltagarepublik/deltagarepublik-besoksmal/deltagarepublik-besoksmal.component';
import { KostnaderBesoksmalComponent } from './forms/kostnader/kostnader-besoksmal/kostnader-besoksmal.component';
import { FaktaWorkshopComponent } from './forms/fakta/fakta-workshop/fakta-workshop.component';
import { DeltagarepublikWorkshopComponent } from './forms/deltagarepublik/deltagarepublik-workshop/deltagarepublik-workshop.component';
import { KostnaderWorkshopComponent } from './forms/kostnader/kostnader-workshop/kostnader-workshop.component';
import { BedomningWorkshopComponent } from './forms/bedomning-info/bedomning-workshop/bedomning-workshop.component';
import { GranskaComponent } from './forms/granska/granska.component';
import { GranskaFaktaComponent } from './forms/granska/granska-fakta/granska-fakta.component';
import { GranskaMediaComponent } from './forms/granska/granska-media/granska-media.component';
import { GranskaKontaktComponent } from './forms/granska/granska-kontakt/granska-kontakt.component';
import { SkickainFormComponent } from './forms/skicka/skickain-form/skickain-form.component';

const routes: Routes = [
  { path: '' ,
    children: [
      {path: ':id', component: KkAjPublicFormsComponent},
      {path: '', component: KkAjPublicFormsComponent},
    ]
  },
  // { path: '',
  // component: KkAjPublicFormsComponent, },
];

@NgModule({
  declarations: [
    KkAjPublicFormsComponent,
    TestarformComponent,
    BaseformComponent,
    ImageuploadAJComponent,
    FaktaComponent,
    LokalComponent,
    DeltagarepublikComponent,
    KostnaderComponent,
    ValArrangemangsTypComponent,
    NyUtovareComponent,
    TidigareUtovareComponent,
    KontaktPersonComponent,
    SmakprovComponent,
    BedomningInfoComponent,
    ValjUtovareComponent,
    TidigareArrangemangComponent,
    BesoksmalComponent,
    ForestallningComponent,
    UtstallningComponent,
    SkolbioComponent,
    WorkshopComponent,
    ListasmakprovComponent,
    SafeHtmlPipe,
    ArrFormComponent,
    UtstallFaktaComponent,
    UtstallLokalComponent,
    ArrStartComponent,
    DeltagarepublikSkolbioComponent,
    LokalSkolbioComponent,
    FaktaSkolbioComponent,
    KostnaderSkolbioComponent,
    DeltagarepublikBesoksmalComponent,
    KostnaderBesoksmalComponent,
    FaktaWorkshopComponent,
    DeltagarepublikWorkshopComponent,
    KostnaderWorkshopComponent,
    BedomningWorkshopComponent,
    GranskaComponent,
    GranskaFaktaComponent,
    GranskaMediaComponent,
    GranskaKontaktComponent,
    SkickainFormComponent,
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    EditorModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ImageUploaderModule,
    NgxBootstrapSliderModule,
    NgbModule,
    NgxDynamicTabindexModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    formUtovareModel,
    formKontaktModel,
    FormVisaBlockHandlerModel,
    FormArrangemangModel,
    FormExempelModel,
    FormFaktaModel,
    getTidigareModule,
    ServerApiResponsModel,
    formGlobalsModel,
    FormDataModel,
    postFormDataModel,
    PostFormModel,
    FaktalistModel
  ],
  exports: [
    KkAjPublicFormsComponent
  ]
})
export class KkAjPublicFormsModule { }
