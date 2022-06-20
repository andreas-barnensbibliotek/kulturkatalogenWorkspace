import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormGroupDirective, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'aj-deltagarepublik-workshop',
  templateUrl: './deltagarepublik-workshop.component.html',
  styleUrls: ['./deltagarepublik-workshop.component.scss']
})
export class DeltagarepublikWorkshopComponent implements OnInit {
  sliderval:any = "0";
  showinfo:Array<boolean> = new Array;

  @Input() formGroupName!: string;
  FaktaFrmGrp!: FormGroup;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.FaktaFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup
  }

  get speltid(){
    return this.FaktaFrmGrp.get("Speltid") as FormControl;
  }

  onCheckboxChange(e:any, controlname:string) {
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

  changeSpeltid(e:any, value:string){
    this.speltid.setValue(value);
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
