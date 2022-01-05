import { FormGroup, FormGroupDirective, FormControl } from '@angular/forms';
import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fakta',
  templateUrl: './fakta.component.html',
  styleUrls: ['./fakta.component.scss']
})
export class FaktaComponent implements OnInit {

  @Input() formGroupName!: string;
  FaktaFrmGrp!: FormGroup;
  DatumModel!: NgbDateStruct;

  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {

    this.FaktaFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup

  }

}
