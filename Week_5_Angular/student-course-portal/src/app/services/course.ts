import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, catchError,retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) {}

  private courses: Course[] = [
  ];

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(
      'http://localhost:3000/courses'
    ).pipe(
      map(courses =>
        courses.filter(course => course.credits > 0)
      ),
      // tap() is used for side effects like logging or analytics.
      // It does not modify the Observable data.
      // Data transformations should be done using map().
      tap(courses => {
        console.log('Courses loaded:', courses.length);
      }),
      // retry(2) retries the failed HTTP request two more times
      // before passing the error to catchError().
      retry(2),
      catchError(err => {
        console.error(err);
        return throwError(() =>
          new Error('Failed to load courses. Please try again.')
        );
      })
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(
      `http://localhost:3000/courses/${id}`
    );
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(
      'http://localhost:3000/courses',
      course
    );
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(
      `http://localhost:3000/courses/${course.id}`,
      course
    );
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(
      `http://localhost:3000/courses/${id}`
    );
  }
}