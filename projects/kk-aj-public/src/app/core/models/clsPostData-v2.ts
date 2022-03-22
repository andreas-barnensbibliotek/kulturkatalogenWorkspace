import { IpostSearchV2 } from './../interface/ipost-search-v2';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class clsPostDataV2 implements IpostSearchV2{
  cmdTyp:string="0";
  freeTextSearch:string ="";
  arrTypID:number=0;
  konstartID: number= 0;
  startYear: number=0;
  stoppYear: number=0;
  ageList:Array<number>=[];
  konstartIdList:Array<number> = [];
  tagList:Array<string>=[];
}

