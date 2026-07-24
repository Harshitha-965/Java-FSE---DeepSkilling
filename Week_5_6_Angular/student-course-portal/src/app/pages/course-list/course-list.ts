import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../../components/course-card/course-card';
import { NgFor, NgIf } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight';

@Component({
  selector: 'app-course-list',
  imports: [CourseCard, NgFor, NgIf, HighlightDirective],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit{
  isLoading = true;

  courses = [
    {
      id:1,
      name:'Java Programming',
      code:'CS101',
      credits:4,
      gradeStatus:'passed',
      enrolled: false
    },

    {
      id:2,
      name:'Angular Development',
      code:'CS202',
      credits:3,
      gradeStatus:'pending',
      enrolled: false
    },

    {
      id:3,
      name:'Spring Boot',
      code:'CS303',
      credits:4,
      gradeStatus:'passed',
      enrolled: false
    },

    {
      id:4,
      name:'Python Programming',
      code:'CS404',
      credits:3,
      gradeStatus:'failed',
      enrolled: false
    },

    {
      id:5,
      name:'Database Systems',
      code:'CS505',
      credits:4,
      gradeStatus:'pending',
      enrolled: false
    }

  ];

  selectedCourseId: number | null = null;

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;

    const selectedCourse = this.courses.find(
      course => course.id === courseId
    );

    if(selectedCourse){
      selectedCourse.enrolled = true;
    }
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.isLoading = false;
    },1500);
  }
  // trackBy helps Angular identify list items uniquely using their ID.
  // This improves performance because Angular updates only changed items
  // instead of recreating the entire list.
  trackByCourseId(index: number, course: any): number {
    return course.id;
  }

  
}
