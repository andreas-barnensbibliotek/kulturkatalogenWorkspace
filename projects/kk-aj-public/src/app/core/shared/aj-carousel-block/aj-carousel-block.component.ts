import { AjApiServicesService } from 'aj-api-services';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aj-carousel-block',
  templateUrl: './aj-carousel-block.component.html',
  styleUrls: ['./aj-carousel-block.component.scss']
})
export class AjCarouselBlockComponent implements OnInit {
 @Input() CaruselData?:any;

 mainCaruselData?:any = [];

  constructor(private ajApi :AjApiServicesService) { }

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
}
