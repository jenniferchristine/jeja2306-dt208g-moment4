import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { Course } from '../models/course'; // importerar modell
import { FormsModule } from '@angular/forms'; // tvåvägsbindning för tabell

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  coursePost: Course[] = []; // array som lagrar alla kurser
  filteredCourses: Course [] = []; // array för lagrade kurser som matchar sök och sortering
  searchText: string = ""; // lagrar sökningstext
  sortText: "asc" | "desc" = "asc"; // sorteringsriktning

  constructor(private coursePostService : CourseService) {}

  /* visa kurstabellen när sidan laddas in */
  ngOnInit() : void {
    this.coursePostService.getPosts().subscribe((data) => {
      this.coursePost = data; // tilldelas till kursdata
      this.filteredCourses = data; // tilldelas till kursdata
    });
  }

  /* sökfunktion (filtrerar beroende på söktext) */
  searchTable() : void {
    this.filteredCourses = this.coursePost.filter(course => 
      course.coursename.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
      course.code.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()) ||
      course.progression.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
    );
  }

  /* sorteringsfunktion (sorterar bereoende på kolumn) */
  sortTable(column: string) : void {
    this.filteredCourses.sort((a, b) => { // jämför a och b
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
      return 0; // ingen förändring
    });

    this.sortText = this.sortText === "asc" ? "desc" : "asc"; // växlar riktning
  }
}
