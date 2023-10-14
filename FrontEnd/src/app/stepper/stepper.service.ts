import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class StepperService {

  constructor(private http:HttpClient) { }

  getData()
  {
    let url="http://localhost:3001/nvetude";
    return this.http.get(url);
  }
}
