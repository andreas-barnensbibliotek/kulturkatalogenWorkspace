import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fakta',
  templateUrl: './fakta.component.html',
  styleUrls: ['./fakta.component.scss']
})
export class FaktaComponent implements OnInit {

  @Input() formGroupName!: string;
  FaktaFrmGrp!: FormGroup;
  DatumModel!: NgbDateStruct;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {

    this.FaktaFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup

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
