import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fullstackeng } from './fullstackeng';

@Injectable({
  providedIn: 'root'
})
export class FullstackengService {
  // group(arg0: { aname: (string | ((control: import("@angular/forms").AbstractControl<any, any>) => import("@angular/forms").ValidationErrors | null))[]; }): import("@angular/forms").FormGroup<any> {
  //   throw new Error('Method not implemented.');
  // }
  // createFullstackeng(fullstackeng: Fullstackeng) {
  //   throw new Error('Method not implemented.');
  // }
  private baseURL="http://localhost:8080/api/v1/engineers"
  // group: any;
  constructor(private httpClient: HttpClient) { }
  getFullstackengsList(): Observable<Fullstackeng[]>{
  return this.httpClient.get<Fullstackeng[]>(`${this.baseURL}`);
  }

  createFullstackeng(fullstackeng: Fullstackeng): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, fullstackeng);
  }

  getFullstackengById(id: String): Observable<Fullstackeng>{
    return this.httpClient.get<Fullstackeng>(`${this.baseURL}/${id}`);
  }

  updateFullstackeng(id: String, fullstackeng: Fullstackeng): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, fullstackeng);
  }

  deleteFullstackeng(id: String): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
