import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ny-utovare',
  templateUrl: './ny-utovare.component.html',
  styleUrls: ['./ny-utovare.component.scss']
})
export class NyUtovareComponent implements OnInit {

  @Input() formGroupName!: string;
  nyUtovareFrmGrp!: FormGroup
  showinfo:Array<boolean> = new Array;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.initshowhideVal(8);
    this.nyUtovareFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup

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
