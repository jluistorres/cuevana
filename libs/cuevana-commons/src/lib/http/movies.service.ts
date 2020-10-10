import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MovieService {
    endpoint = 'https://api.themoviedb.org/3';
    // apiKey = 'f70167de410d875907d6a40df4b45cb2';

    constructor(private http: HttpClient) { }

    genres(): Observable<any> {
        return this.http.get(`${this.endpoint}/genre/movie/list?&language=es`)
            .pipe(
                map((res: any) => res.genres),
                // delay(2000)
            );
    }

    search(query: string, page: number = 1): Observable<any> {
        return this.http.get(`${this.endpoint}/search/movie?query=${query}&page=${page}&language=es`);
    }

    discover(params: any): Observable<any> {
        params = {
            ...params,
            // api_key: this.apiKey,
            language: 'es',
            sort_by: 'popularity.desc',
            include_adult: false,
            page: params.page || 1,
            // with_genres: params.with_genres
        };

        let p = new HttpParams();
        // Object.keys(params).forEach(key => {
        //     p = p.set(key, params[key]);
        // });

        for (const key in params) {
            p = p.set(key, params[key]);
        }

        // console.log(p.toString());

        return this.http.get(`
        https://api.themoviedb.org/3/discover/movie`, { params: p });
    }

    trending(): Observable<any> {
        return this.http.get(`${this.endpoint}/trending/all/week?language=es`);
    }

    popular(page: number = 1): Observable<any> {
        return this.http.get(`${this.endpoint}/movie/popular?language=es&page=${page}`);
    }

    rated(page: number = 1): Observable<any> {
        return this.http.get(`${this.endpoint}/movie/top_rated?language=es&page=${page}`);
    }

    details(id: number, type: string = 'movie'): Observable<any> {
        return this.http.get(`${this.endpoint}/${type}/${id}?language=es`);
    }

    actors(id: number): Observable<any> {
        return this.http.get(`${this.endpoint}/movie/${id}/credits`);
    }

}
