import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-kontakt-person',
  templateUrl: './kontakt-person.component.html',
  styleUrls: ['./kontakt-person.component.scss']
})
export class KontaktPersonComponent implements OnInit {
  @Output() copydata = new EventEmitter()
  @Input() formGroupName!: string;
  showinfo:Array<boolean> = new Array;

  kontaktFrmGrp!: FormGroup
  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.initshowhideVal(3);
    this.kontaktFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup
  }


  copykontaktData(){
    this.copydata.emit();
    return false;
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
