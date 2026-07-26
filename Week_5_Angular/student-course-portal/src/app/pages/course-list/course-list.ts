import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../../components/course-card/course-card';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight';
import { Course } from '../../models/course.model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectAllCourses } from '../../store/course/course.selectors';
import { loadCourses } from '../../store/course/course.actions';

@Component({
  selector: 'app-course-list',
  imports: [
    CourseCard,
    NgFor,
    NgIf,
    AsyncPipe,
    HighlightDirective,
    FormsModule
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {

  courses$!: Observable<Course[]>;

  searchTerm = '';

  selectedCourseId: number | null = null;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  ngOnInit(): void {

    this.courses$ = this.store.select(selectAllCourses);

    this.store.dispatch(loadCourses());

  }

  // trackBy helps Angular identify list items uniquely using their ID.
  // This improves performance because Angular updates only changed items
  // instead of recreating the entire list.
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  navigateToCourse(courseId: number): void {
    this.router.navigate(['courses', courseId]);
  }

  updateSearch(): void {
    this.router.navigate(['courses'], {
      queryParams: {
        search: this.searchTerm
      }
    });
  }

  addSampleCourse(): void {
    const newCourse = {
      name: 'Java Programming',
      code: 'JAVA101',
      credits: 5,
      enrolled: false,
      gradeStatus: 'pending' as const
    };

    // Will be migrated to NgRx later
  }

  updateFirstCourse(): void {
    const updatedCourse = {
      id: 1,
      name: 'Advanced Angular',
      code: 'ANG999',
      credits: 5,
      enrolled: false,
      gradeStatus: 'passed' as const
    };

    // Will be migrated to NgRx later
  }

  deleteCourse(id: number): void {

    // Will be migrated to NgRx later

  }

}