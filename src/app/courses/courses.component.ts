import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { Course } from '../models/course';
import { FormsModule } from '@angular/forms'; // tvåvägsbindning för tabell

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  coursePost: Course[] = []; 
  filteredCourses: Course [] = [];
  searchText: string = "";

  constructor(private coursePostService : CourseService) {}

  /* visa kurstabellen när sidan laddas in */
  ngOnInit() {
    this.coursePostService.getPosts().subscribe((data) => {
      this.coursePost = data;
      this.filteredCourses = data; 
    });
  }

  /* sökfunktion */
  searchTable() {
    this.filteredCourses = this.coursePost.filter(course => 
      course.coursename.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
      course.code.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
      course.progression.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
    );
  }
}
