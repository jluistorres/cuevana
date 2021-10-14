import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';

@Injectable()
export class MovieService {
    apiKey = 'f70167de410d875907d6a40df4b45cb2';
    endpoint = 'https://api.themoviedb.org/3';

    constructor(private http: HttpClient) { }

    genres(): Observable<any> {
        return this.http.get(`${this.endpoint}/genre/movie/list?api_key=${this.apiKey}&language=es`)
            .pipe(
                map((res: any) => res.genres)
            );
    }

    search(query: string, page: number = 1): Observable<any> {
        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('query', query)
            .set('page', page)
            .set('language', 'es');

        return this.http.get(`${this.endpoint}/search/movie`, { params });
    }

    discover(requestBody: any): Observable<any> {
        requestBody = {
            ...requestBody,
            api_key: this.apiKey,
            language: 'es',
            sort_by: 'popularity.desc',
            include_adult: false,
            page: requestBody.page || 1,
            // with_genres: requestBody.with_genres
        };

        let params = new HttpParams();

        for (const key in requestBody) {
            params = params.set(key, requestBody[key]);
        }

        // console.log(params.toString());

        return this.http.get(`
        https://api.themoviedb.org/3/discover/movie`, { params });
    }

    trending(): Observable<any> {
        return this.http.get(`${this.endpoint}/trending/all/week?api_key=${this.apiKey}&language=es`);
    }

    popular(page: number = 1): Observable<any> {
        return this.http.get(`${this.endpoint}/movie/popular?api_key=${this.apiKey}&language=es&page=${page}`);
    }

    rated(page: number = 1): Observable<any> {
        return this.http.get(`${this.endpoint}/movie/top_rated?api_key=${this.apiKey}&language=es&page=${page}`);
    }

    details(id: number, type: string = 'movie'): Observable<any> {
        return this.http.get(`${this.endpoint}/${type}/${id}?api_key=${this.apiKey}&language=es`);
    }

    actors(id: number): Observable<any> {
        return this.http.get(`${this.endpoint}/movie/${id}/credits?api_key=${this.apiKey}`);
    }
}
