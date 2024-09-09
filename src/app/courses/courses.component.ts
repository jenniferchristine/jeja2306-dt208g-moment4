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
  sortText: "asc" | "desc" = "asc"; // sorteringsriktning

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

  sortTable(column: string) {
    this.filteredCourses.sort((a, b) => {
      let valueA = a[column as keyof Course];
      let valueB = b[column as keyof Course];

      if (typeof valueA === "string") {
        valueA = valueA.toLowerCase();
        valueB = valueB.toLowerCase();
      }

      if (valueA < valueB) {
        return this.sortText === "asc" ? -1 : 1;
      }
      if (valueA > valueB) {
        return this.sortText === "asc" ? 1 : -1;
      }
      return 0;
    });

    this.sortText = this.sortText === "asc" ? "desc" : "asc";
  }
}
