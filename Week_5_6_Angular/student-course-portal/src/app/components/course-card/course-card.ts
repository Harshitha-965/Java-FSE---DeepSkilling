import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, NgStyle } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe'
'../../pipes/credit-label';
@Component({
  selector: 'app-course-card',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, NgStyle, HighlightDirective, CreditLabelPipe],
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

      'card--enrolled': this.course.enrolled,

      'card--full': this.course.credits >= 4,

      'expanded': this.isExpanded

    };

  }
}
