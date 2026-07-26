import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
import { routes } from './app.routes';
import { errorHandlerInterceptor } from './interceptors/error-handler-interceptor';
import { loadingInterceptor } from './interceptors/loading-interceptor';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideState } from '@ngrx/store';
import { courseReducer } from './store/course/course.reducer';
import { provideEffects } from '@ngrx/effects';
import { CourseEffects } from './store/course/course.effects';
import { enrollmentReducer } from './store/enrollment/enrollment.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),

    provideZoneChangeDetection({ eventCoalescing: true }),

    provideRouter(routes),

    provideStore(),

    provideState('course', courseReducer),

    provideState('enrollment', enrollmentReducer),

    provideEffects(CourseEffects),

    provideStoreDevtools({
      maxAge: 25
    }),

    provideHttpClient(
      withInterceptors([
        authInterceptor,
        errorHandlerInterceptor,
        loadingInterceptor
      ])
    )
  ]
};
