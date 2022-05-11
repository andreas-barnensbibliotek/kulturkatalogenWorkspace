// export interface IpostSearchV2 {
//   	arrtypid:string,
//   	cmdtyp:string,
//   	konstartid:Array<string>,
//   	publiceradJaNej:string,
//   	searchstr:string,
//   	age:Array<string>
//   }
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

  // "cmdTyp": "string",
  // "freeTextSearch": "string",
  // "arrTypID": 0,
  // "konstartID": 0,
  // "startYear": 0,
  // "stoppYear": 0,
  // "ageList": [
  //   0
  // ],
  // "konstartIdList": [
  //   0
  // ]
