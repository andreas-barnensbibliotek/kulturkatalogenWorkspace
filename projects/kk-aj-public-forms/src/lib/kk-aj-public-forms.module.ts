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
    SafeHtmlPipe

  ],
  imports: [
    BrowserModule,
    EditorModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ImageUploaderModule,
    NgxBootstrapSliderModule,
    NgbModule,

  ],
  providers: [
    formUtovareModel,
    formKontaktModel,
    FormVisaBlockHandlerModel,
    FormArrangemangModel,
    FormExempelModel,
    FormFaktaModel
  ],
  exports: [
    KkAjPublicFormsComponent
  ]
})
export class KkAjPublicFormsModule { }
