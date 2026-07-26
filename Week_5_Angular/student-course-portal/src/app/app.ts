import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AsyncPipe, NgIf } from '@angular/common';
import { LoadingService } from './services/loading';

import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';

@Component({
  selector: 'app-root',
  imports: [Header, Home, RouterOutlet, CourseList, NgIf, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('student-course-portal');
  constructor(public loadingService: LoadingService){}
}
