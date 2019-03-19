import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _moment from 'moment';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class TechnologyService {

  constructor(private http: HttpClient) { }

  getTechnologies(): Observable<any> {
    return this.http.get('assets/db.json');
  }

}
