import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'aj-bedomning-workshop',
  templateUrl: './bedomning-workshop.component.html',
  styleUrls: ['./bedomning-workshop.component.scss']
})
export class BedomningWorkshopComponent implements OnInit {
  @Input() formGroupName!: string;
  FaktaFrmGrp!: FormGroup;
  DatumModel!: NgbDateStruct;
  valdtab:string = "1";

  // ANVÄNDS INTE DÅ ALLA BEDÖMNINGAR ÄR SAMMA.. ANVÄND ->  besomning-info
  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.valdtab= '1';
    this.FaktaFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup
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

