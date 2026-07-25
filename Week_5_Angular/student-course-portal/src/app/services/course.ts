import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    {
      id: 1,
      name: 'Angular',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: false
    },
    {
      id: 2,
      name: 'Java',
      code: 'CS102',
      credits: 3,
      gradeStatus: 'pending',
      enrolled: false
    },
    {
      id: 3,
      name: 'Spring Boot',
      code: 'CS103',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: false
    },
    {
      id: 4,
      name: 'MySQL',
      code: 'CS104',
      credits: 3,
      gradeStatus: 'failed',
      enrolled: false
    },
    {
      id: 5,
      name: 'React',
      code: 'CS105',
      credits: 4,
      gradeStatus: 'pending',
      enrolled: false
    }
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  getCourseById(id: number): Course | undefined {
    return this.courses.find(course => course.id === id);
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }
}