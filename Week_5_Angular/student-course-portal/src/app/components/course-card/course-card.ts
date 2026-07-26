import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, inject } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, NgStyle,AsyncPipe, NgIf } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe'
import { EnrollmentService } from '../../services/enrollment';
import { Store } from '@ngrx/store';

import {
  enrollInCourse,
  unenrollFromCourse
} from '../../store/enrollment/enrollment.actions';

import {
  selectEnrolledIds
} from '../../store/enrollment/enrollment.selectors';

@Component({
  selector: 'app-course-card',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, NgStyle, AsyncPipe, NgIf, HighlightDirective, CreditLabelPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard implements OnChanges{
  @Input()
  course!: {
    id: number;
    name: string;
    code: string;
    credits: number;
    gradeStatus: string;
    enrolled:boolean;
  };

  @Output()
  enrollRequested = new EventEmitter<number>();
  
  isExpanded = false;
  private store = inject(Store);
  constructor(
    public enrollmentService: EnrollmentService
  ) {}
  
  enrolledIds$ = this.store.select(selectEnrolledIds);
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course Input Changed');
    console.log('Previous Value:', changes['course']?.previousValue);
    console.log('Current Value:', changes['course']?.currentValue);
  }

  toggleDetails(): void {
    this.isExpanded = !this.isExpanded;
  }

  get cardClasses() {
    return {
      'card--enrolled': this.enrollmentService.isEnrolled(this.course.id),
      'card--full': this.course.credits >= 4,
      'expanded': this.isExpanded
    };
  }

  onEnrollClick(): void {

    if (this.enrollmentService.isEnrolled(this.course.id)) {

      this.enrollmentService.unenroll(this.course.id);

      this.store.dispatch(
        unenrollFromCourse({
          courseId: this.course.id
        })
      );

    } else {

      this.enrollmentService.enroll(this.course.id);

      this.store.dispatch(
        enrollInCourse({
          courseId: this.course.id
        })
      );

    }

    this.enrollRequested.emit(this.course.id);
  }
  @Output()
  deleteRequested = new EventEmitter<number>();

  onDeleteClick(event: MouseEvent): void {
    event.stopPropagation();
    this.deleteRequested.emit(this.course.id);
  }
  
}
