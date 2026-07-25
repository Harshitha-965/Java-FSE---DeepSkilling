import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    FormBuilder,
    FormGroup,
    Validators,
    ReactiveFormsModule,
    AbstractControl,
    ValidationErrors,
    FormArray,
    FormControl
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css',
})
export class ReactiveEnrollmentForm implements OnInit{
  enrollForm!: FormGroup;

  noCourseCode(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value && value.toString().toUpperCase().startsWith('XX')) {
      return { noCourseCode: true };
    }
    return null;
  }

  simulateEmailCheck(control: AbstractControl ): Promise<ValidationErrors | null> {

    return new Promise((resolve) => {
      setTimeout(() => {
        const value = control.value;
        if (value && value.includes('test@')) {
          resolve({ emailTaken: true });
        } else {
          resolve(null);
        }
      }, 800);
    });
  }

  constructor(private fb: FormBuilder){}
  ngOnInit(): void {
      this.enrollForm = this.fb.group({
          studentName: [
              '',
              [
                  Validators.required,
                  Validators.minLength(3)
              ]
          ],
          studentEmail: this.fb.control(
            '',
            [Validators.required, Validators.email],
            [this.simulateEmailCheck.bind(this)]
          ),
          courseId: [
              '',
              [
                Validators.required,
                this.noCourseCode.bind(this)
              ]
          ],
          preferredSemester: [
              'Odd',
              Validators.required,
          ],
          agreeToTerms: [
              false,
              Validators.requiredTrue
          ],

          additionalCourses: this.fb.array([])
      });

  }
  get additionalCourses(): FormArray<FormControl> {
    return this.enrollForm.get('additionalCourses') as FormArray<FormControl>;
  }
  // enrollForm.value returns only enabled controls.
  // enrollForm.getRawValue() returns all controls, including disabled ones.
  onSubmit(): void {
    console.log('Form Value:', this.enrollForm.value);
    console.log('Raw Value:', this.enrollForm.getRawValue());
  }

  addCourse(): void {
    this.additionalCourses.push(
      new FormControl('', Validators.required)
    );
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

}
