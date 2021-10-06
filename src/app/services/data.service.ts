import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = "https://infinite-waters-25224.herokuapp.com";
  sitesList: any;

  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  httpOptions = {
    headers: this.httpHeaders
  };

  private modalSubject = new Subject<any>();


  constructor(private http: HttpClient) { }


  getAllData(options: any) {
    let data: any = {
      '_limit': options.limit
    }
    if(options && options.searchTerm)
      data['domain'] = options.searchTerm;
    
    return this.http.get<any>(this.baseUrl+'/domainList', {params: data, headers: this.httpHeaders});
  }


  addData(data: any) {
    return this.http.post<any>(this.baseUrl+'/domainList', data, this.httpOptions);
  }
  
  
  setModalFlag(value: any) {
    this.modalSubject.next(value);
  }

  getModalFlag(): Observable<any> {
    return this.modalSubject.asObservable();
  }
  
}
