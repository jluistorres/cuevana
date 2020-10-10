import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req;

        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzAxNjdkZTQxMGQ4NzU5MDdkNmE0MGRmNGI0NWNiMiIsInN1YiI6IjVlYTFkODk5OGU4NzAyMDAxZjEwMjRkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xPpVi7LTGd3_sokD4iN4naVA3W9NpL8EVPgNxKaA5AQ';
        if (token) {
            request = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
        }

        return next.handle(request);
    }

}
