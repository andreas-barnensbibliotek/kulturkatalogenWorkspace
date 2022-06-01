import { FormFaktaModel } from './../../MODELformGroup/FormFaktaModel';
import { FormGroup, FormArray, FormGroupDirective, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'aj-skolbio',
  templateUrl: './skolbio.component.html',
  styleUrls: ['./skolbio.component.scss']
})
export class SkolbioComponent implements OnInit,OnChanges {
  @Input() formGroupName!: string;
  SkolbioFrmGrp!: FormGroup;
  ExempelFrmGrp!: FormGroup;
  // tmpSkolbioFrmGrp!: FormGroup;
  showinfo:Array<boolean> = new Array;
  sliderval:any = "0"
  onCheckboxClicked:boolean=false;
  onSpeltidClicked:boolean=false;
  toAge:Array<boolean> = new Array;

  constructor(private rootformGroup: FormGroupDirective, public fb:FormBuilder, public _faktaMdl: FormFaktaModel,) { }

  ngOnInit(): void {
    let bascontrol = this.rootformGroup.control.get(this.formGroupName);
    this.SkolbioFrmGrp = bascontrol?.get('Faktalist') as FormGroup;

    // this.ExempelFrmGrp = this.rootformGroup.control;
    // console.log("init");
    //  this.CheckAge();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.rootformGroup.control.valueChanges.subscribe((values: any)=> {
      let bascontrol = this.rootformGroup.control.get(this.formGroupName);
      this.SkolbioFrmGrp = bascontrol?.get('Faktalist') as FormGroup;
      console.log("Värden ändraded: BesoksmalComponent ", values);
    })
  }
  // initFromGroupdata(){
  //   this.tmpSkolbioFrmGrp = this.fb.group(this._faktaMdl.genFGSkolbioValidator);
  //   this.tmpSkolbioFrmGrp.valueChanges.subscribe(x => {
  //     console.log('tmpSkolbioFrmGrp changed: ' + this.tmpSkolbioFrmGrp.valid)
  //     if(this.tmpSkolbioFrmGrp.valid){
  //       this.updateBaseForm();
  //       console.log(x)
  //     }
  //   })
  // }

  // updateBaseForm(){
  //   console.log("this.formGroupName: " +this.formGroupName)
  //   this.SkolbioFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;
  //   this.SkolbioFrmGrp.patchValue(this.tmpSkolbioFrmGrp.value);
  //   console.log('tmpSkolbioFrmGrp form value changed: ' + this.tmpSkolbioFrmGrp.valid)
  // }

  get AlderFran(){
    return this.SkolbioFrmGrp.get("AlderFran") as FormArray;
  }
  get speltid(){
    return this.SkolbioFrmGrp.get("Speltid") as FormControl;
  }
  get Kostnad(){
    return this.SkolbioFrmGrp.get("Kostnad") as FormControl;
  }

  changeSpeltid(e:any, value:string){
    this.onSpeltidClicked= true;
    this.speltid.setValue(value);
  }
  onCheckboxChange(e:any, controlname:string) {
    const checkArray: FormArray = this.SkolbioFrmGrp.get(controlname) as FormArray;
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


initFromGroupdata(){

    this.SkolbioFrmGrp.valueChanges.subscribe(x => {

      this.test();
    })
  }

  test() {
    let i: number = 0;
    this.AlderFran.controls.forEach((item: any) => {
      if (item.value) {
        console.log("värde: " + item.value);
        return;
      }
      i++;
    });
  }
  // copytomainForm(){
  //   if(this.tmpSkolbioFrmGrp.get("AlderFran")?.valid){
  //     this.SkolbioFrmGrp.get("AlderFran")?.patchValue(this.tmpSkolbioFrmGrp.get("AlderFran")?.value)
  //   }
  // }

  // visa el dölj infotexter i formuläret
  initshowhideVal(antalShowInfo:number):void{
    for (let i:number = 0; i == antalShowInfo; i++) {
      this.showinfo[i] = false;
    }
  }
  showHideinfo(infoboxID:number){
    this.showinfo[infoboxID] = !this.showinfo[infoboxID]
  }
}
