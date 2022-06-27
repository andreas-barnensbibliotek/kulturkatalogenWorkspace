import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bedomning-info',
  templateUrl: './bedomning-info.component.html',
  styleUrls: ['./bedomning-info.component.scss']
})
export class BedomningInfoComponent implements OnInit {
 @Input() formGroupName!: string;
  FaktaFrmGrp!: FormGroup;
  DatumModel!: NgbDateStruct;
  valdtab:string = "1";

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.valdtab= '1';
    this.FaktaFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;
  }

  get Cv(){
    return this.FaktaFrmGrp.get("Cv") as FormControl;
  }
  get BidragStod(){
    return this.FaktaFrmGrp.get("BidragStod") as FormControl;
  }
  get FSkatt(){
    return this.FaktaFrmGrp.get("FSkatt") as FormControl;
  }
  get Centrumbildning(){
    return this.FaktaFrmGrp.get("Centrumbildning") as FormControl;
  }

  showCvTabs(showtabId:string):void{
    this.valdtab = showtabId;
    this.FaktaFrmGrp.get("Cv")?.setValue("");
  }

  showinfo:Array<boolean> = new Array;
  initshowhideVal(antalShowInfo:number):void{
    for (let i:number = 0; i == antalShowInfo; i++) {
      this.showinfo[i] = false;
    }
  }
  showHideinfo(infoboxID:number){
    this.showinfo[infoboxID] = !this.showinfo[infoboxID]
  }
}

