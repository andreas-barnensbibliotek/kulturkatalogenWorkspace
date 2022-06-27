import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormGroupDirective, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'aj-deltagarepublik-utstallning',
  templateUrl: './deltagarepublik-utstallning.component.html',
  styleUrls: ['./deltagarepublik-utstallning.component.scss']
})
export class DeltagarepublikUtstallningComponent implements OnInit {
  sliderval:any = "0"
  @Input() formGroupName!: string;
  FaktaFrmGrp!: FormGroup;
  chkTuched:boolean=false;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.FaktaFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup
  }

  get AlderFran(){
    return this.FaktaFrmGrp.get("AlderFran") as FormControl;
  }

  onCheckboxChange(e:any, controlname:string) {
    this.chkTuched=true;
    const checkArray: FormArray = this.FaktaFrmGrp.get(controlname) as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
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
