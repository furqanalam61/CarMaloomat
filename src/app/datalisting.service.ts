import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatalistingService {

  constructor(private httpClient: HttpClient) { }

  public getCars(): Observable<any> {
    const url = `https://cars-node-api.herokuapp.com/cars/getCars`;
    //const url = `https://random-quotes.now.sh/get-all-quotes`;

    return this.httpClient.get(url);
  }
}
