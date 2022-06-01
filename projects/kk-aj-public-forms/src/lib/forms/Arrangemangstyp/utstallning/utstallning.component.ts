import { FormGroup, FormGroupDirective, FormArray } from '@angular/forms';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'aj-utstallning',
  templateUrl: './utstallning.component.html',
  styleUrls: ['./utstallning.component.scss']
})
export class UtstallningComponent implements OnInit, OnChanges {
  @Input() formGroupName!: string;
  utstallningFrmGrp!: FormGroup;
  ExempelFormGrp!:FormArray;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {

    this.utstallningFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;

    // this.SmakprovFrmGrp= this.rootformGroup.control;
    console.log("init");
    //  this.CheckAge();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.rootformGroup.control.valueChanges.subscribe((values: any)=> {
      this.utstallningFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;

    })
  }

 get ExempelFormGroup(){
   return this.utstallningFrmGrp.get("Exempel");
 }
}
