import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';
import { StudentProfile } from '../../components/student-profile/student-profile';
import { Notification } from '../../components/notification/notification';
@Component({
  selector: 'app-home',
  imports: [FormsModule, CourseSummaryWidget, StudentProfile, Notification],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  courseCount = 0;

  // Property Binding [property] updates the DOM from the component (one-way).
  // Two-Way Binding [(ngModel)] keeps the component and the DOM synchronized (two-way).
  searchTerm = '';

  constructor(private courseService: CourseService) {}
  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courseCount = courses.length;
      },
      error: (err) => {
        console.error(err);
      }
    });
    console.log('HomeComponent initialised — courses loaded');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }
  
}
