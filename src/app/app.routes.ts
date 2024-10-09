import { Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: "courses", component: CoursesComponent },
    { path: "", redirectTo: '/courses', pathMatch: 'full' },
    { path: "404", component: NotFoundComponent }, 
    { path: "**", redirectTo: "404" }
];
