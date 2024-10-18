import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  
  url :string = "http://api.citybik.es/v2/networks";
  url1 :string = "http://localhost:3000/api/allUsers"

  constructor(private http: HttpClient) { }

  getDataFromApi(): Observable<any>{
    return this.http.get<any>(this.url1);
  }
}
