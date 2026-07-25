import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enrollment-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css',
})
export class EnrollmentForm {
  studentName = '';

  studentEmail = '';

  courseId: number | null = null;

  preferredSemester = 'Odd';

  agreeToTerms = false;

  submitted = false;

  onSubmit(form: NgForm): void {
    console.log('Form Values:', form.value);
    console.log('Is Form Valid:', form.valid);
    this.submitted = true;
  }
}

