import { FormControl, FormGroup } from '@angular/forms';
// import { LocalStorageHandler } from './localstorageHandler';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class FormDataModel {

  public formImgData:any;
  public previewImg:any;

  constructor(){
    this.formImgData= new FormData();
  }
}
