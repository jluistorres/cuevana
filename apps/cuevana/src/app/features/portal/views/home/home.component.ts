import { Location } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '@cuevana-commons';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trending = [];
  rated = [];
  popular: any = {};
  isLoadingTrend = false;
  isLoadingPopular = false;
  isLoadingRated = false;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.trendingMovies();
    this.ratedMovies();

    const page = +this.activatedRoute.snapshot.queryParamMap.get('page');
    this.goToPage(page || 1);
  }

  trendingMovies(): void {
    this.isLoadingTrend = true;
    this.movieService.trending()
      .pipe(
        delay(2000)
      )
      .subscribe(res => {
        this.trending = res.results.slice(0, 7);
        this.isLoadingTrend = false;
      }, () => this.isLoadingTrend = false);
  }

  ratedMovies(): void {
    this.isLoadingRated = true;
    this.movieService.rated()
      .pipe(
        delay(2000)
      )
      .subscribe(res => {
        this.rated = res.results.slice(0, 9);
        this.isLoadingRated = false;
      }, () => this.isLoadingRated = false);
  }

  previousPage(): void {
    if (this.popular.page > 1) {
      this.goToPage(this.popular.page - 1);
    }
  }

  nextPage(): void {
    if (this.popular.page < this.popular.total_pages) {
      this.goToPage(this.popular.page + 1);
    }
  }

  goToPage(page: number): void {
    this.isLoadingPopular = true;
    this.movieService.popular(page)
      .pipe(
        delay(2000)
      )
      .subscribe(res => {
        this.popular = res;
        let params = new HttpParams();
        if (page > 1) {
          params = params.set('page', page);
        }

        this.location.go('/', params.toString());

        this.isLoadingPopular = false;
      }, () => this.isLoadingPopular = false);
  }

  dragstart(event): void {
    console.log('dragstart', event);
  }

  dragend(event): void {
    console.log('** dragend', event);
  }

}
