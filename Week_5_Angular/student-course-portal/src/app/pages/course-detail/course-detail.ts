import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';
import { NgIf, NgFor } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { EnrollmentService } from '../../services/enrollment';
import { Student } from '../../models/student.model';


@Component({
  selector: 'app-course-detail',
  imports: [NgIf,NgFor],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail implements OnInit{
  course?: Course;
  students: Student[] = [];
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {

    this.route.paramMap
  .pipe(

    switchMap(params => {

      const id = Number(params.get('id'));

      // Load the course
      this.courseService.getCourseById(id).subscribe({
        next: course => this.course = course
      });

      // Load students of this course
      return this.enrollmentService.getStudentsByCourse(id);

    })

  )
  .subscribe({

    next: students => {
      this.students = students;
    },

    error: err => {
      console.error(err);
    }

  });

  }
}
