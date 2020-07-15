import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, throwError, fromEventPattern } from 'rxjs';
import {Global } from './models/global'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  datatable = []
  private globalDataUrl = "https://api.covid19api.com/summary";
  constructor(private http: HttpClient) { }


  getGlobalData(): Observable<Global>{
    return this.http.get<Global>(this.globalDataUrl).pipe(

    )
  }

  // getByCountry(): Observable<Country>{
  //   return this.http.get<Country>(this.getbyCountry).pipe(

  //   )
  }


