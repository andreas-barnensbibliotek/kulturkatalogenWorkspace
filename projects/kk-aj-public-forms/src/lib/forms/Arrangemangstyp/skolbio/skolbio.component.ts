import { FormGroup, FormArray, FormGroupDirective } from '@angular/forms';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormVisaBlockHandlerModel } from './../../MODELformGroup/FormVisaBlockHandlerModel';
@Component({
  selector: 'aj-skolbio',
  templateUrl: './skolbio.component.html',
  styleUrls: ['./skolbio.component.scss']
})
export class SkolbioComponent implements OnInit,OnChanges {
  @Input() formGroupName!: string;
  SkolbioFrmGrp!: FormGroup;
  ExempelFormGrp!:FormArray;
  ArrTypNext:boolean=false;

  constructor(
    private rootformGroup: FormGroupDirective,
    public _blockMdl: FormVisaBlockHandlerModel
  ) { }

  ngOnInit(): void {
    this.SkolbioFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.rootformGroup.control.valueChanges.subscribe((values: any)=> {
      this.SkolbioFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;
    })

  }

 get ExempelFormGroup(){
   return this.SkolbioFrmGrp.get("Exempel");
 }

 ShowSteg(val:number){
    this._blockMdl.stegBlock(val);
    return false;
  }
}
