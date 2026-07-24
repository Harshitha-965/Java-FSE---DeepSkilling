import { Component } from '@angular/core';
import { CourseCard } from '../../components/course-card/course-card';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-course-list',
  imports: [CourseCard, NgFor, NgIf],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  courses = [
    {
      id: 1,
      name: 'Java Programming',
      code: 'CS101',
      credits: 4
    },
    {
      id: 2,
      name: 'Angular Development',
      code: 'CS202',
      credits: 3
    },
    {
      id: 3,
      name: 'Spring Boot',
      code: 'CS303',
      credits: 4
    },
    {
      id: 4,
      name: 'Python Programming',
      code: 'CS404',
      credits: 3
    },
    {
      id: 5,
      name: 'Database Systems',
      code: 'CS505',
      credits: 4
    }
  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}
