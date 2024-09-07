import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  coursePost: any[] = []; 

  constructor(private coursePostService : CourseService) {}

  ngOnInit() {
    this.coursePostService.getPosts().subscribe((data) => {
      this.coursePost = data;
    });
  }
}
