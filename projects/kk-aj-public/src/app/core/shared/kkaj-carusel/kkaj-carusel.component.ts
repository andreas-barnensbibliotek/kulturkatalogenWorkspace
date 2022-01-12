
import { AjApiServicesService } from 'aj-api-services';
import { Component, Input, OnInit, Renderer2 } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-kkaj-carusel',
  templateUrl: './kkaj-carusel.component.html',
  styleUrls: ['./kkaj-carusel.component.scss']
})
export class KkajCaruselComponent implements OnInit {

  @Input() CaruselData?:any;

 mainCaruselData?:any = [];

  constructor(private ajApi :AjApiServicesService,private renderer: Renderer2) { }

  ngOnInit(): void {
    this.getCaruselData(this.CaruselData)
  }


  getCaruselData(CData:any){

    let cardata = {
      "cmdTyp": "",
      "arrTypID": 0,
      "konstartID": CData,
      "startYear":0,
      "stoppYear": 0
    }

    this.ajApi.searchArrangemang(CData).subscribe(Response => {
      this.mainCaruselData = Response;
              // this.SpinnerLoader = false;

    });
  }
  ngAfterViewInit(){


  }
  addJsToElement(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    this.renderer.appendChild(document.body, script);
    return script;
  }
}
