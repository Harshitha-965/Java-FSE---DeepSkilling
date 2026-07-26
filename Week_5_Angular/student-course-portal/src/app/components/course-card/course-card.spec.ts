import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Course } from '../../models/course.model';
import { CourseCard } from './course-card';
import { provideMockStore } from '@ngrx/store/testing';
import { EnrollmentService } from '../../services/enrollment';
import { SimpleChange } from '@angular/core';

describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [

        provideMockStore({
          initialState: {
            enrollment: {
              enrolledCourseIds: []
            }
          }
        }),

        {
          provide: EnrollmentService,
          useValue: {
            isEnrolled: () => false,
            enroll: () => {},
            unenroll: () => {}
          }
        }

      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
    component.course = {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'Passed',
      enrolled: false
    };
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the course name', () => {
    const mockCourse: Course = {
      id: 1,
      name: 'Data Structures',
      code: 'CS101',
      credits: 4,
      gradeStatus: 'passed',
      enrolled: false
    };
    component.course = mockCourse;
    fixture.detectChanges();
    const heading =
      fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(heading.textContent).toContain('Data Structures');

  });

  it('should emit enrollRequested event', () => {

    spyOn(component.enrollRequested, 'emit');

    component.onEnrollClick();

    expect(component.enrollRequested.emit)
      .toHaveBeenCalledWith(1);

  });

  it('should detect input changes', () => {

    const previousCourse = {
      id: 1,
      name: 'Java',
      code: 'CS101',
      credits: 3,
      gradeStatus: 'Passed',
      enrolled: false
    };

    const currentCourse = {
      id: 2,
      name: 'Angular',
      code: 'CS102',
      credits: 4,
      gradeStatus: 'Passed',
      enrolled: false
    };

    component.ngOnChanges({
      course: new SimpleChange(previousCourse, currentCourse, false)
    });

    expect(component).toBeTruthy();

  });
});
