import { HttpClient } from '@angular/common/http'; // import av httpclient
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // inkluderar rxjs
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private url: string = "https://webbutveckling.miun.se/files/ramschema_ht23.json";
  constructor(private http: HttpClient) { } // dependency injection

  /* hämta poster */
  getPosts(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url); // anropar och returnerar
  }
}