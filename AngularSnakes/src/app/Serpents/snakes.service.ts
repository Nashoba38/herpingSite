import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Snakes } from './snake';

@Injectable({
  providedIn: 'root'
})
export class SnakesService {


  constructor(private http: HttpClient) { }

  getSnakes(): Observable<Snakes[]> {
    const snakes = this.http.get<Snakes[]>('https://dylan-bouchet.simplon-grenoble.fr/api/snakesDetails');
    return snakes;
  }

  getSnake(id: number): Observable<Snakes[]> {
    const snakeById = this.http.get<Snakes[]>('https://dylan-bouchet.simplon-grenoble.fr/api/snakesDetails/'+id);
    return snakeById;
  }
}
