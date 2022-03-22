import { FormFaktaModel } from './../MODELformGroup/FormFaktaModel';
import { FormArrangemangModel } from './../MODELformGroup/FormArrangemangModel';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormGroupDirective, FormControl, FormBuilder } from '@angular/forms';
import { ImageUploaderOptions } from 'ngx-image-uploader-next';

@Component({
  selector: 'app-val-arrangemangs-typ',
  templateUrl: './val-arrangemangs-typ.component.html',
  styleUrls: ['./val-arrangemangs-typ.component.scss']
})
export class ValArrangemangsTypComponent implements OnInit {
  @Input() formGroupName!:string;
  arrangemangFrmGrp!:FormGroup;
  // tmpArrangemangFrmGrp!:FormGroup;
  onCheckboxClicked:boolean=false;
  chkKF:Array<boolean> = new Array;

  options: ImageUploaderOptions = {
    thumbnailHeight: 150,
    thumbnailWidth: 150,
    uploadUrl: 'http://localhost:4200/upload',
    allowedImageTypes: ['image/png', 'image/jpeg'],
    maxImageSize: 3
  };

  constructor(private rootformGroup: FormGroupDirective, public fb:FormBuilder, private _arrMdl:FormArrangemangModel,private _faktaMdl:FormFaktaModel) { }

  ngOnInit(): void {
     this.arrangemangFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;

      this.initArrangemangFromGroupdata();
  }

  initArrangemangFromGroupdata(){
    // this.tmpArrangemangFrmGrp = this.fb.group(this._arrMdl.genFGTmp);
    this.arrangemangFrmGrp.valueChanges.subscribe(x => {
      // console.log('changed: ' + this.tmpArrangemangFrmGrp.valid)
      //  if(!this.onCheckboxClicked){
      //   this.CheckKonstForm()
      //   // console.log(x)
      //  }
    })
  }

  get Rubrik(){
    return this.arrangemangFrmGrp.get('Rubrik');
  }
  get UnderRubrik(){
    return this.arrangemangFrmGrp.get('UnderRubrik');
  }
  get Innehall(){
    return this.arrangemangFrmGrp.get('Innehall');
  }
  get MainImage(){
    return this.arrangemangFrmGrp.get('MainImage');
  }
  // get Konstform(){
  //   return this.arrangemangFrmGrp.get("Konstform") as FormArray;
  // }

  // updateBaseForm(){
  //   this.arrangemangFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;
  //   this.arrangemangFrmGrp.patchValue(this.tmpArrangemangFrmGrp.value);
  //   // console.log('form value changed: ' + this.tmpArrangemangFrmGrp.valid)
  // }

  // rensaFaktalist(){
  //   // this.rootformGroup.control.get('Faktalist')?.setValue(this._faktaMdl.genFGEmpty)
  //   this.rootformGroup.control.removeControl("Faktalist");
  //   this.rootformGroup.control.addControl('Faktalist', this.fb.group(this._faktaMdl.genFG));
  //   // this.tmpArrangemangFrmGrp?.setValue(this._faktaMdl.genFGEmpty)
  // }

  setFaktalist(val:number){
    // this.rootformGroup.control.get('Faktalist')?.setValue(this._faktaMdl.genFGEmpty)
    this.rootformGroup.control.removeControl("Faktalist");
    if(val==1){
      this.rootformGroup.control.addControl('Faktalist', this.fb.group(this._faktaMdl.genFG));
    }
    if(val==2){
      this.rootformGroup.control.addControl('Faktalist', this.fb.group(this._faktaMdl.genFG));
    }
    if(val==4){
      this.rootformGroup.control.addControl('Faktalist', this.fb.group(this._faktaMdl.genFG));
    }
    if(val==7){
      this.rootformGroup.control.addControl('Faktalist', this.fb.group(this._faktaMdl.genFGBesoksmal));
    }
    if(val==8){
      this.rootformGroup.control.addControl('Faktalist', this.fb.group(this._faktaMdl.genFGSkolbioValidator));
    }
  }

  onCheckboxChange(e:any, controlname:string) {
    const checkArray: FormArray = this.arrangemangFrmGrp.get(controlname) as FormArray;
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
  showinfo:Array<boolean> = new Array;
  initshowhideVal(antalShowInfo:number):void{
    for (let i:number = 0; i == antalShowInfo; i++) {
      this.showinfo[i] = false;
    }
  }

  showHideinfo(infoboxID:number){
    this.showinfo[infoboxID] = !this.showinfo[infoboxID]
  }

  CheckKonstForm() {
    let i: number = 0;

    let converttoFormControl=  this.arrangemangFrmGrp.get("Konstform")?.value;
    if (converttoFormControl){
      this.arrangemangFrmGrp.removeControl('Konstform');
      this.arrangemangFrmGrp.addControl('Konstform', this.fb.array(converttoFormControl),);

      converttoFormControl.forEach((item: any) => {
        this.chkKF[item] = true;
        this.onCheckboxClicked= true;
        i++;
      });
    }
  }
}
