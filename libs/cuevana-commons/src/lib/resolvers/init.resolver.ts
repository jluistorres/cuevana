import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { MovieService } from '../http/movies.service';

@Injectable()
export class InitResolver implements Resolve<any>{
    constructor(private movieService: MovieService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.movieService.genres();
    }

}
