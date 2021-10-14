import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let request = req;

    const token = null; //'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzAxNjdkZTQxMGQ4NzU5MDdkNmE0MGRmNGI0NWNiMiIsInN1YiI6IjVlYTFkODk5OGU4NzAyMDAxZjEwMjRkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xPpVi7LTGd3_sokD4iN4naVA3W9NpL8EVPgNxKaA5AQ';
    if (token) {
      request = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
    }

    return next.handle(request);

    // Simulamos una demora de 2 segundos en todos los servicios
    /* return timer(2000).pipe(
      switchMap(() => next.handle(request))
    ); */
  }
}
