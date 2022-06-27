import { retry, catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable()
export class ArrFormApiService {
  private _httpOptions = {
    headers: new HttpHeaders({
    'Content-Type' : 'application/json',
  })
  }

  constructor( private http:HttpClient) {
  }

  getArrApi(url:any){
    return this.http.get<any>(url,this._httpOptions)
  }

  doPostArrApi(url:string, postobj:any){
    return this.http.post(url,JSON.stringify(postobj),this._httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

private handleError( errorResponse:HttpErrorResponse){
  if(errorResponse.error instanceof ErrorEvent){

    console.error("Clientside error: ", errorResponse.error.message);
  }else{
    console.error("Serverside error: ", errorResponse);
  }

  return throwError("Något blev fel vid hämtning av data. Vi har fått en notering och jobbar med felet. vänligen försök senare");

}

}
