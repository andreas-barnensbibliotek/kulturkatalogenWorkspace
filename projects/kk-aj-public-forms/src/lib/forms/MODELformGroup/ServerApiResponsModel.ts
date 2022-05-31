
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class ServerApiResponsModel {
  constructor(){ }
  public genTmpAPI:any  =
  {
    "Utovarelist": {
      "UtovarID": "86",
      "Organisation": "DEV Kulturkatalogen",
      "Fornamn": "Andreas",
      "Efternamn": "Josefsson",
      "Telefon": "0708183215",
      "Adress": "Sturegatan 35",
      "Postnr": "50115",
      "Ort": "Borås",
      "Epost": "test@test.se",
      "Kommun": "Borås",
      "Weburl": "www.kulturkatalgonenvast.se",
      "Bild": "",
      "Beskrivning": "Kulturkatalogen testkonto"
    },
    "Kontakt": {
      "KontaktId": "",
      "Kontaktfornamn": "Andreas",
      "KontaktEfternamn": "Josefsson",
      "KontaktTelefon": "0708183215",
      "KontaktEpost": "test@test.se"
    },
    "Arrangemang": {
      "Rubrik": "Rubrikimport",
      "UnderRubrik": "Underrubrik Import",
      "Innehall": "Import texte i editor",
      "Arrangemangtyp": "1",
      "Konstform": "",
      "Konstform2": "",
      "Konstform3": "",
      "MainImage": {
        "MediaID": "",
        "MediaUrl": "",
        "MediaFilename": "",
        "MediaSize": "",
        "MediaAlt": "",
        "MediaFoto": "",
        "MediaTyp": "",
        "MediaVald": "",
        "mediaTitle": "",
        "mediaBeskrivning": "",
        "mediaLink": ""
      }
    },
    "Faktalist": {
      "AntalMedverkande": "232",
      "Medverkande": "Sara Persson, Kalle Nilsson",
      "Period": "2022-01-05",
      "BokningsbarTom": {
        "year": 2022,
        "month": 2,
        "day": 18
      },
      "MaxPublik": "45",
      "AlderFran": null,
      "AlderTill": null,
      "ForestallningarDag": "2",
      "Byggtid": "23",
      "Rivtid": "12",
      "ScenBredd": "3",
      "ScenDjup": "3",
      "ScenTakHojd": "3",
      "Ljus": "Befintligt",
      "BarHjalp": "7",
      "El": "16 A",
      "OvrigaLokalkrav": "mer lokalkrav behövs",
      "Kostnad": "100000",
      "KostnadAndraArr": null,
      "Resor": "Tillkommer",
      "Logi": "Tillkommer",
      "LogiOvrigt": null,
      "Traktamente": "Ingår",
      "Lararhandledning": "handledningen",
      "Speltid": 48,
      "Morklaggning": "Ja helst",
      "Ljud": "Tar med eget/Ingår",
      "KostnadPaket": null,
      "OvrigaKostnader": "övriga kostnader är mycket bra",
      "Ovrigt": "Noteringar i övrigt",
      "KostnadtredjeArr": null,
      "PremiarDatum": {
        "year": 2022,
        "month": 2,
        "day": 18
      },
      "MaxAntal": "3",
      "Cv": "länktillcv.html",
      "BidragStod": "Nej",
      "BidragStodFran": "Regionaltstöd av kommunen",
      "FSkatt": "Ja",
      "Centrumbildning": "Nej",
      "OvrigInfo": "massa övrig information",
      "UtstallningsPeriod": null,
      "PedagogisVerksamhet": null,
      "Marknadsforing": null,
      "Yta": null,
      "Exempel": null
    }
  }

  public tmpFullAPIResponse:any = {
    "kk_aj_admin": {
      "Ansokningstyp": "Nekad",
      "ansokningarlista": {
        "ansokningarcount": "1",
        "ansokningar": [{
          "ansokningid": 1213,
          "ansokningdate": "2018-04-19",
          "ansokningcontentid": "1119",
          "ansokningtitle": "TEST ARRANGEMANG ", //DETTA
          "ansokningsubtitle": "TEST", //DETTA
          // "ansokningContent": "<p>DETTA ÄR ETT TEST ARRANGEMANG</p>;", //DETTA
          "ansokningContent": "&lt;p&gt;DETTA ÄR ETT TEST ARRANGEMANG&lt;/p&gt;&lt;p&gt;DETTA ÄR igen ETT TEST ARRANGEMANG&lt;/p&gt;", //DETTA
          "ansokningutovare": "dev Kulturkatalogen",
          "ansokningurl": "",
          "ansokningbilaga": "",
          "ansokningpublicerad": "nej",
          "ansokninglast": "ja",
          "ansokningstatus": "Nekad",
          "ansokningtypid": "7", //DETTA
          "ansokningkonstformid": ["1","6"], //DETTA
          "ansokningtyp": "Besöksmål med resestöd",
          "ansokningkonstform": "Science Center",
          "ansokningFaktalist": [{ //DETTA
            "Faktaid": 21595,
            "FaktaTypID": 7,
            "Faktarubrik": "Ålder från",
            "FaktaValue": "14"
          }, {
            "Faktaid": 21596,
            "FaktaTypID": 8,
            "Faktarubrik": "Ålder till",
            "FaktaValue": "16"
          }, {
            "Faktaid": 21597,
            "FaktaTypID": 30,
            "Faktarubrik": "Övrigt om kostnad",
            "FaktaValue": "123456"
          }],
          "ansokningMedialist": [],
          "ansokningUsername": "1",
          "ansokningMediaImage": {  //DETTA
            "MediaID": 0,
            "MediaUrl": "C:\\fakepath\\3595_yvonne.jpg",
            "MediaFilename": "3595_yvonne.jpg",
            "MediaSize": "",
            "MediaAlt": "adfadf",
            "MediaFoto": "adf",
            "MediaTyp": "",
            "MediaVald": "nej",
            "mediaTitle": "",
            "mediaBeskrivning": "",
            "mediaLink": "",
            "sortering": "0"
          },
          "ansokningUtovarid": 86,
          "ansokningUtovardata": {
            "UtovarID": 86,
            "Organisation": "dev Kulturkatalogen",
            "Fornamn": "Andreas",
            "Efternamn": "Josefsson",
            "Telefon": "0708183215",
            "Adress": "Sturegatan 35",
            "Postnr": "50115",
            "Ort": "Borås",
            "Epost": "test@test.se",
            "Kommun": "Borås",
            "Weburl": "www.kulturkatalgonenvast.se"
          },
          "ansokningAgespan": "- ",
          "ansokningFilterfakta": {
            "Bokningsbar": "0",
            "Morklaggning": "0",
            "Takhojd": "0",
            "Speltid": "0",
            "Kostnad": "0"
          },
          "ansokningKonstform2": "0",
          "ansokningKonstform3": "0",
          "ansokningKontaktId": "",
          "ansokningKontaktfornamn": "Andreas",
          "ansokningKontaktEfternamn": "Josefsson",
          "ansokningKontaktTelefon": "0708183215",
          "ansokningKontaktEpost": "test@test.se",
          "PeriodStart": "",
          "PeriodSlut": "",
          "ArkivStatus": "0"
        }]
      },
      "Ansokningarlistacount": 1,
      "Ansokningarlistacurrentpage": 0,
      "Ansokningarlistatotalpages": 1,
      "nyaansokningarcount": 0,
      "approvedansokningarcount": 0,
      "deniedansokningarcount": 0,
      "status": "Arrangemangsdetaljer är listade!"
    }
  }
  public tmpResetArrModel:any = {
    "kk_aj_admin": {
      "Ansokningstyp": "",
      "ansokningarlista": {
        "ansokningarcount": "",
        "ansokningar": [{
          "ansokningid": 0,
          "ansokningdate": "",
          "ansokningcontentid": "0",
          "ansokningtitle": "", //DETTA
          "ansokningsubtitle": "", //DETTA
          // "ansokningContent": "<p>DETTA ÄR ETT TEST ARRANGEMANG</p>;", //DETTA
          "ansokningContent": "", //DETTA
          "ansokningutovare": "",
          "ansokningurl": "",
          "ansokningbilaga": "",
          "ansokningpublicerad": "",
          "ansokninglast": "",
          "ansokningstatus": "",
          "ansokningtypid": "0", //DETTA
          "ansokningkonstformid": [], //DETTA
          "ansokningtyp": "",
          "ansokningkonstform": "",
          "ansokningFaktalist": [],
          "ansokningMedialist": [],
          "ansokningUsername": "1",
          "ansokningMediaImage": {  //DETTA
            "MediaID": 0,
            "MediaUrl": "",
            "MediaFilename": "",
            "MediaSize": "",
            "MediaAlt": "",
            "MediaFoto": "",
            "MediaTyp": "",
            "MediaVald": "",
            "mediaTitle": "",
            "mediaBeskrivning": "",
            "mediaLink": "",
            "sortering": "0"
          },
          "ansokningUtovarid": 0,
          "ansokningUtovardata": {
            "UtovarID": 0,
            "Organisation": "",
            "Fornamn": "",
            "Efternamn": "0",
            "Telefon": "",
            "Adress": "",
            "Postnr": "",
            "Ort": "",
            "Epost": "",
            "Kommun": "",
            "Weburl": ""
          },
          "ansokningAgespan": "- ",
          "ansokningFilterfakta": {
            "Bokningsbar": "0",
            "Morklaggning": "0",
            "Takhojd": "0",
            "Speltid": "0",
            "Kostnad": "0"
          },
          "ansokningKonstform2": "0",
          "ansokningKonstform3": "0",
          "ansokningKontaktId": "",
          "ansokningKontaktfornamn": "",
          "ansokningKontaktEfternamn": "",
          "ansokningKontaktTelefon": "",
          "ansokningKontaktEpost": "",
          "PeriodStart": "",
          "PeriodSlut": "",
          "ArkivStatus": "0"
        }]
      },
      "Ansokningarlistacount": 0,
      "Ansokningarlistacurrentpage": 0,
      "Ansokningarlistatotalpages": 0,
      "nyaansokningarcount": 0,
      "approvedansokningarcount": 0,
      "deniedansokningarcount": 0,
      "status": ""
    }
  }
}
