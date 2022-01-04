import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aj-besoksmal',
  templateUrl: './besoksmal.component.html',
  styleUrls: ['./besoksmal.component.scss']
})
export class BesoksmalComponent implements OnInit {
  @Input() formGroupName!: string;
  BesoksmalFrmGrp!: FormGroup;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {

    this.BesoksmalFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup
  }

}
