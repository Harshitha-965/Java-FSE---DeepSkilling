import {
  HttpErrorResponse,
  HttpInterceptorFn
} from '@angular/common/http';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(

    catchError((error: HttpErrorResponse) => {

      if (error.status === 401) {

        console.error('Unauthorized (401)');
        // Later we can redirect to a login page.

      }

      if (error.status === 500) {

        alert('Something went wrong on the server.');

      }

      return throwError(() => error);

    })

  );

};