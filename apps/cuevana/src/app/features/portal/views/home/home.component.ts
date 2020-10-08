import { Location } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '@cuevana-commons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class PortalHomeComponent implements OnInit {
  trending = [];
  rated = [];
  popular: any = {};

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.movieService.trending().subscribe(res => {
      this.trending = res.results.slice(0, 7);
    });

    this.movieService.rated().subscribe(res => {
      this.rated = res.results.slice(0, 9);
    });

    const page = this.activatedRoute.snapshot.queryParamMap.get('page');
    this.goToPage(page || 1);
  }

  previousPage() {
    if (this.popular.page > 1) {
      this.goToPage(this.popular.page - 1);
    }
  }

  nextPage() {
    if (this.popular.page < this.popular.total_pages) {
      this.goToPage(this.popular.page + 1);
    }
  }

  goToPage(page) {
    this.movieService.popular(page).subscribe(res => {
      this.popular = res;

      // Actualizamos la url
      let params = new HttpParams();
      if (page > 1) {
        params = params.set('page', page);
      }

      this.location.go('/', params.toString());
    });
  }

}
