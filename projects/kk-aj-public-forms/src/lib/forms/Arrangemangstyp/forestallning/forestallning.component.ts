import { FormGroup, FormGroupDirective, FormArray } from '@angular/forms';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'aj-forestallning',
  templateUrl: './forestallning.component.html',
  styleUrls: ['./forestallning.component.scss']
})
export class ForestallningComponent implements OnInit, OnChanges {
  @Input() formGroupName!: string;
  ForestallningFrmGrp!: FormGroup;
  ExempelFormGrp!:FormArray;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {

    this.ForestallningFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;

    // this.SmakprovFrmGrp= this.rootformGroup.control;
    console.log("init");
    //  this.CheckAge();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.rootformGroup.control.valueChanges.subscribe((values: any)=> {
      this.ForestallningFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;

    })
  }

 get ExempelFormGroup(){
   return this.ForestallningFrmGrp.get("Exempel");
 }
}
