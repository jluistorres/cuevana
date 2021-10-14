import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '@cuevana-commons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class PortalSearchComponent implements OnInit {
  keywords: string;
  movies: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.keywords = params.get('s');
      this.search();
    });
  }

  search(page: number = 1) {
    // console.log(page, this.keywords);
    this.movieService.search(this.keywords, page).subscribe(res => {
      this.movies = res;
    });
  }

}
