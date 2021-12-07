import { Global } from './core/Global/global';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AjApiServicesComponent } from './aj-api-services.component';



@NgModule({
  declarations: [
    AjApiServicesComponent
  ],
  imports: [
    HttpClientModule,
  ],
  providers: [
    Global
  ],
  exports: [
    AjApiServicesComponent
  ]
})
export class AjApiServicesModule { }
