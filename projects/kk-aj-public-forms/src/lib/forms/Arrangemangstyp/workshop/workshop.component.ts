import { FormGroup, FormGroupDirective, FormArray } from '@angular/forms';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'aj-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {
  @Input() formGroupName!: string;
  workshopFrmGrp!: FormGroup;
  ExempelFormGrp!:FormArray;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {

    this.workshopFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;

    // this.SmakprovFrmGrp= this.rootformGroup.control;
    console.log("init");
    //  this.CheckAge();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.rootformGroup.control.valueChanges.subscribe((values: any)=> {
      this.workshopFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup;

    })
  }

 get ExempelFormGroup(){
   return this.workshopFrmGrp.get("Exempel");
 }
}
