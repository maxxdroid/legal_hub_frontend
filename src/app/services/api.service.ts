import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Options } from '../interface/type';
import { Observable } from 'rxjs';
import { legalDocument } from '../interface/type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }


  // GET method
  get<T>(url: string, options: Options): Observable<T> { 
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }

  // POST method to add a new document
  post(url: string, body: FormData, options?: Options): Observable<legalDocument> {
    return this.httpClient.post<legalDocument>(url, body, options);
  }
  
  // PUT method to update an entire document
  put(url: string, body: FormData, options?: Options): Observable<legalDocument> {
    return this.httpClient.put<legalDocument>(url, body, options);
  }

  // // PATCH method to partially update a document
  // patch(url: string, body: Partial<legalDocument>, options?: Options): Observable<legalDocument> {
  //   return this.httpClient.patch<legalDocument>(url, body, options);
  // }

  // // DELETE method to delete a document
  // delete(url: string, options?: Options): Observable<void> {
  //   return this.httpClient.delete<void>(url, options);
  // }
}
