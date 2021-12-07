import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ny-utovare',
  templateUrl: './ny-utovare.component.html',
  styleUrls: ['./ny-utovare.component.scss']
})
export class NyUtovareComponent implements OnInit {

  @Input() formGroupName!: string;
  nyUtovareFrmGrp!: FormGroup
  constructor(private rootformGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.nyUtovareFrmGrp = this.rootformGroup.control.get(this.formGroupName) as FormGroup
  }

}
