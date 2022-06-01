import { formGlobalsModel } from './../MODELformGroup/formGlobalsModel';
import { getTidigareModule } from './../MODELformGroup/getTidigareModule';
import { FormFaktaModel } from './../MODELformGroup/FormFaktaModel';
import { FormVisaBlockHandlerModel } from './../MODELformGroup/FormVisaBlockHandlerModel';
import { FormArrangemangModel } from './../MODELformGroup/FormArrangemangModel';
import { FormGroup, FormBuilder, FormGroupDirective } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'aj-arr-form',
  templateUrl: './arr-form.component.html',
  styleUrls: ['./arr-form.component.scss']
})
export class ArrFormComponent implements OnInit, OnChanges {
  @Input() formGroupName!:string;
  @Output() ArrDataLoaded=new EventEmitter();

  ArrForm!:FormGroup;
  showArr:boolean= false;


  constructor(
    private rootformGroup: FormGroupDirective,
    public fb:FormBuilder,
    private _arrMdl:FormArrangemangModel,
    public _blockMdl: FormVisaBlockHandlerModel,
    public _faktaMdl: FormFaktaModel,
    public _TidigareMdl: getTidigareModule,
    private ref: ChangeDetectorRef,
    private _frmGlb:formGlobalsModel
    ) { }

  ngOnInit(): void {

    this.initArrform();

  }
  ngOnChanges(changes: SimpleChanges): void {
     console.log("värden ändras: ArrFormComponent: " + changes);
  }

  initArrform(){
    this.ArrForm = this.rootformGroup.control.get(this.formGroupName) as FormGroup;
  }


  // get Arrangemangtyp(){
  //   return this.ArrForm.get('Arrangemang')!.get('Arrangemangtyp');
  // }

  setFaktalist(val:number){
    // this.rootformGroup.control.get('Faktalist')?.setValue(this._faktaMdl.genFGEmpty)
    this.ArrForm.removeControl('Arrangemang');
    this.ArrForm.addControl('Arrangemang', this.fb.group(this._arrMdl.genFG));
    this.rootformGroup.control.get(this.formGroupName)?.get('Arrangemang')?.get('Arrangemangtyp')?.patchValue(val)


     this.ArrForm.removeControl("Faktalist");
    if(val==this._frmGlb.faktaTypId.forestallning){
      this.ArrForm.addControl('Faktalist', this.fb.group(this._faktaMdl.genFG));
    }
    if(val==this._frmGlb.faktaTypId.utstallning){
      this.ArrForm.addControl('Faktalist', this.fb.group(this._faktaMdl.genFG));
    }
    if(val==this._frmGlb.faktaTypId.workshop){
      this.ArrForm.addControl('Faktalist', this.fb.group(this._faktaMdl.genFG));
    }
    if(val== this._frmGlb.faktaTypId.besoksmal){
      this.ArrForm.addControl('Faktalist', this.fb.group(this._faktaMdl.genFGBesoksmal));
    }
    if(val==this._frmGlb.faktaTypId.skolbio){
      this.ArrForm.addControl('Faktalist', this.fb.group(this._faktaMdl.genFGSkolbioValidator));
    }

    this.showArr= true;
    this.IsArrLoaded(val);
  }

  IsArrLoaded(arrtypid:number){
    this.ref.detectChanges();
    this.ArrDataLoaded.emit({'isloaded': this.showArr,'arrtypid':arrtypid});

   }



  // showFaktaBlock(arrtypid:number){
  //   let test = this.ArrForm.get('Arrangemang');
  //   if(test!.get('Arrangemangtyp')){
  //       let visaFakta = this.ArrForm.get('Arrangemang')!.get('Arrangemangtyp')!.value;

  //       if(arrtypid == visaFakta){
  //         // this.BaseRootForm.removeControl('Faktalist');
  //         // switch ( arrtypid ) {
  //         //   case 1:
  //         //     this.BaseRootForm.addControl('Faktalist', this.fb.group(this._faktaMdl.genFG));
  //         //       break;
  //         //   case 7:
  //         //     this.BaseRootForm.addControl('Faktalist', this.fb.group(this._faktaMdl.genFGBesoksmal));
  //         //       break;
  //         //   default:
  //         //     this.BaseRootForm.addControl('Faktalist', this.fb.group(this._faktaMdl.genFG));
  //         //      break;
  //         // }

  //         return true;
  //       }
  //     }else{
  //       return false;
  //     }

  // }

  // GetTidigareArrangemang(val:number){
  //   console.log("get tidigare: " + val);

  //   if (val>0){

  //     // this.BaseRootForm.removeControl('Arrangemang');
  //     // this.BaseRootForm.addControl('Arrangemang', this.fb.group(this._TidigareMdl.getTidigareArr(7)));
  //     // this.BaseRootForm.addControl('Arrangemang', this._TidigareMdl.getTidigareArr(7));
  //     this._TidigareMdl.getTidigareArr(7); //fyll this._arrMdl.genFG med nya värden från servern!!
  //           // let att= this.ArrForm.get('Arrangemang');
  //     // this.ArrForm.get('Arrangemang')?.patchValue(this._TidigareMdl.getTidigareArr(7));
  //      this.ArrForm.removeControl('Arrangemang');
  //      this.ArrForm.addControl('Arrangemang', this.fb.group(this._arrMdl.genFG));
  //     this.ArrForm.removeControl('Faktalist');
  //     this.ArrForm.addControl('Faktalist', this.fb.group(this._TidigareMdl.getTidigareFakta(7)));
  //     // let testar = this._faktaMdl.tmpgenFGBesoksmal;
  //     // testar.AlderFran.forEach((t: any) => {
  //     //   console.log(t);
  //     // });
  //     // this.BaseRootForm.get('Faktalist')?.patchValue(this._faktaMdl.tmpgenFGBesoksmal);
  //   }else{
  //     this._TidigareMdl.ResetArr();
  //     this.ArrForm.removeControl('Arrangemang');
  //     this.ArrForm.addControl('Arrangemang', this.fb.group(this._arrMdl.genFG));
  //     this.ArrForm.removeControl('Faktalist');
  //     this.ArrForm.addControl('Faktalist', this.fb.group([]),);
  //   }
  //   this.showArr= true;
  //    this.ref.detectChanges();
  // }
  ShowSteg(val:number){
    // if(val==1){
    //   this._TidigareMdl.ResetArr();
    //   this.ArrForm.removeControl('Arrangemang');
    //   this.ArrForm.addControl('Arrangemang', this.fb.group([]),);
    //   this.ArrForm.removeControl('Faktalist');
    //   this.ArrForm.addControl('Faktalist', this.fb.group([]),);
    // }
    // if(val==2){
    //   this.ArrForm.removeControl('Arrangemang');
    //   this.ArrForm.addControl('Arrangemang', this.fb.group(this._arrMdl.genFG),);
    // }

    this._blockMdl.stegBlock(val)
    return false;
  }

}
