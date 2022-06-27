import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aj-fakta-utstallning',
  templateUrl: './fakta-utstallning.component.html',
  styleUrls: ['./fakta-utstallning.component.scss']
})
export class FaktaUtstallningComponent implements OnInit {

  @Input() formGroupName!: string;
  FaktaFrmGrp!: FormGroup;
  DatumModel!: NgbDateStruct;
  showinfo:Array<boolean> = new Array;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.FaktaFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup
  }

  get Period(){
    return this.FaktaFrmGrp.get("Period") as FormControl;
  }
  get PremiarDatum(){
    return this.FaktaFrmGrp.get("PremiarDatum") as FormControl;
  }
  get BokningsbarTom(){
    return this.FaktaFrmGrp.get("BokningsbarTom") as FormControl;
  }

  initshowhideVal(antalShowInfo:number):void{
    for (let i:number = 0; i == antalShowInfo; i++) {
      this.showinfo[i] = false;
    }
  }
  showHideinfo(infoboxID:number){
    this.showinfo[infoboxID] = !this.showinfo[infoboxID]
  }
}
