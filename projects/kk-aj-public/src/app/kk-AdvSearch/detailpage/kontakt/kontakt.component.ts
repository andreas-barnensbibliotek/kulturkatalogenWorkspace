import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {
  @Input() public Kontaktblock:any;


  constructor() { }

  ngOnInit(): void {
  }

}
