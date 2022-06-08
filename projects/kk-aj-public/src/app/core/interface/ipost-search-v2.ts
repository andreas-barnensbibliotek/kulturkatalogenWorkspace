  export interface IpostSearchV2 {
  	cmdTyp:string,
    freeTextSearch:string,
  	arrTypID:number,
    konstartID: number,
    startYear: number,
    stoppYear: number,
    ageList:Array<number>,
    konstartIdList:Array<number>,
    tagList:Array<string>,
    utovareId:number,
  }
