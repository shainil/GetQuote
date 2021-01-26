import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/Common/http';
import {Observable} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly apiUrl = "https://localhost:44344/api";

  constructor(private http:HttpClient) { }

  getSymbol(val:any):Observable<any[]>{
    return this.http.get<any>(this.apiUrl + '/Symbol');
  }
}
