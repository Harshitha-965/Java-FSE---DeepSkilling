import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../../components/course-card/course-card';
import { NgFor, NgIf } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  imports: [CourseCard, NgFor, NgIf, HighlightDirective],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit{
  isLoading = true;
  courses: Course[] = []
  
  constructor(private courseService: CourseService) {}

  selectedCourseId: number | null = null;

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  ngOnInit(): void {
    this.courses=this.courseService.getCourses();
    console.log(this.courses);
    setTimeout(()=>{
      this.isLoading = false;
    },1500);
  }
  // trackBy helps Angular identify list items uniquely using their ID.
  // This improves performance because Angular updates only changed items
  // instead of recreating the entire list.
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  
}
