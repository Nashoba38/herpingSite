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
    const lezards = this.http.get<Lezards[]>('https://dylan-bouchet.simplon-grenoble.fr/api/lezardsDetails');
    return lezards;
  }

  getLezard(id: number): Observable<Lezards[]> {
    const lezardById = this.http.get<Lezards[]>('https://dylan-bouchet.simplon-grenoble.fr/api/lezardsDetails/'+id);
    return lezardById;
  }
}
