import { FormGroup, FormGroupDirective, FormArray, FormControl, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'aj-besoksmal',
  templateUrl: './besoksmal.component.html',
  styleUrls: ['./besoksmal.component.scss']
})
export class BesoksmalComponent implements OnInit, OnChanges {
  @Input() formGroupName!: string;
  BesoksmalFrmGrp!: FormGroup;
  showinfo:Array<boolean> = new Array;
  SmakprovFrmGrp!: FormGroup;
  onCheckboxClicked:boolean=false;
  toAge:Array<boolean> = new Array;

  constructor(private rootformGroup: FormGroupDirective) {}

  ngOnInit(): void {
    let bascontrol = this.rootformGroup.control.get(this.formGroupName);
    this.BesoksmalFrmGrp = bascontrol?.get('Faktalist') as FormGroup;

    // this.SmakprovFrmGrp= this.rootformGroup.control;
    console.log("init");
    //  this.CheckAge();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.rootformGroup.control.valueChanges.subscribe((values: any)=> {
      let bascontrol = this.rootformGroup.control.get(this.formGroupName);
      this.BesoksmalFrmGrp = bascontrol?.get('Faktalist') as FormGroup;
      console.log("Värden ändraded: BesoksmalComponent ", values);
    })
  }

  onCheckboxChange(e:any, controlname:string) {
    const checkArray: FormArray = this.BesoksmalFrmGrp.get(controlname) as FormArray;
    this.onCheckboxClicked= true;

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

  // visa el dölj infotexter i formuläret
  initshowhideVal(antalShowInfo:number):void{
    for (let i:number = 0; i == antalShowInfo; i++) {
      this.showinfo[i] = false;
    }
  }
  showHideinfo(infoboxID:number){
    this.showinfo[infoboxID] = !this.showinfo[infoboxID]
  }

  get AlderFran(){
    return this.BesoksmalFrmGrp.get("AlderFran") as FormArray;
  }

  CheckAge() {
    let i: number = 0;
    this.AlderFran.controls.forEach((item: any) => {
      this.toAge[item.value] = true;
      this.onCheckboxClicked= true;
      i++;
    });

  }

}
