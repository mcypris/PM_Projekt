import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
 constructor(private httpClient: HttpClient) { }

 getDataChars()
 {
  const httpHeader = new HttpHeaders({
    'Accept': 'application/json',
    'Authorization': 'Bearer nWkp_uw54pcd9oiVXyDz'
   })
    
   return this.httpClient.get('https://the-one-api.dev/v2/character', {headers: httpHeader});
 }

}
