import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aj-granska-kontakt',
  templateUrl: './granska-kontakt.component.html',
  styleUrls: ['./granska-kontakt.component.scss']
})
export class GranskaKontaktComponent implements OnInit {
  @Input() public Kontaktblock:any;

  constructor() { }

  ngOnInit(): void {
  }

}
