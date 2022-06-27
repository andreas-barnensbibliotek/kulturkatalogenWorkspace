import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'aj-fakta-workshop',
  templateUrl: './fakta-workshop.component.html',
  styleUrls: ['./fakta-workshop.component.scss']
})
export class FaktaWorkshopComponent implements OnInit {

  @Input() formGroupName!: string;
  FaktaFrmGrp!: FormGroup;
  DatumModel!: NgbDateStruct;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.FaktaFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;
  }

  get AntalMedverkande(){
    return this.FaktaFrmGrp.get("AntalMedverkande") as FormControl;
  }
  get Medverkande(){
    return this.FaktaFrmGrp.get("Medverkande") as FormControl;
  }
  get BokningsbarTom(){
    return this.FaktaFrmGrp.get("BokningsbarTom") as FormControl;
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
