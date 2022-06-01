import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'aj-utstall-fakta',
  templateUrl: './utstall-fakta.component.html',
  styleUrls: ['./utstall-fakta.component.scss']
})
export class UtstallFaktaComponent implements OnInit {

  @Input() formGroupName!: string;
  utstallFaktaFrmGrp!: FormGroup;
  DatumModel!: NgbDateStruct;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {

    this.utstallFaktaFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup

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
