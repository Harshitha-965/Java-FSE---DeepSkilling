import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../../components/course-card/course-card';
import { NgFor, NgIf } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-list',
  imports: [CourseCard, NgFor, NgIf, HighlightDirective, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit{
  isLoading = true;
  courses: Course[] = []
  searchTerm = '';
  errorMessage = '';

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  selectedCourseId: number | null = null;

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.isLoading = true;
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      error: (err) => {
        this.errorMessage = err.message;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
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
    this.courseService.createCourse(newCourse).subscribe({
      next: (course) => {
        console.log('Course Added:', course);
        this.courses.push(course);
      },
      error: (err) => {
        console.error(err);
      }
    });
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
    this.courseService.updateCourse(updatedCourse).subscribe({
      next: (course) => {
        console.log('Updated:', course);
        this.loadCourses();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  deleteCourse(id: number): void {
    this.courseService.deleteCourse(id).subscribe({
      next: () => {
        console.log('Deleted');
        this.loadCourses();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
