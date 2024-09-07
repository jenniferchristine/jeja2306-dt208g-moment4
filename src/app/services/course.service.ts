import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private url: string = "public/courses.json";
  constructor() { }
}
