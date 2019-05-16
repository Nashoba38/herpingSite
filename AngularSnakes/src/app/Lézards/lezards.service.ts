import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lezards } from './lezard';

@Injectable({
  providedIn: 'root'
})
export class LezardsService {

  constructor(private http: HttpClient) { }

  getLezards(): Observable<Lezards[]> {
    const lezards = this.http.get<Lezards[]>('http://localhost:8000/api/lezardsDetails');
    return lezards;
  }

  getLezard(id: number): Observable<Lezards[]> {
    const lezardById = this.http.get<Lezards[]>('http://localhost:8000/api/lezardsDetails/'+id);
    return lezardById;
  }
}
