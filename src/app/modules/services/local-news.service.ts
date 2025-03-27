import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalNewsService {

  private localNewsUrl = 'assets/local-news.json';

  constructor(private http: HttpClient) { }

  getLocalNews(): Observable<any[]> {
    return this.http.get<any[]>(this.localNewsUrl);
  }
}
