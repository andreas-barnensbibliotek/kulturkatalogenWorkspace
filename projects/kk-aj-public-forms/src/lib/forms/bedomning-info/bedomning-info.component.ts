import { FormGroup, FormGroupDirective } from '@angular/forms';
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
    this.FaktaFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup

  }

  showCvTabs(showtabId:string):void{
    this.valdtab = showtabId;
    this.FaktaFrmGrp.get("Cv")?.setValue("");
  }
    // visa el dölj infotexter i formuläret
   // a = (click)="showHideinfo(2)"
   // <div *ngIf="showinfo[2]"
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

