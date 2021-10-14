import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '@cuevana-commons';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class PortalCategoryComponent implements OnInit {
  id: number;
  movies: any = {};
  isLoading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.search(1);
    });
  }

  search(page: number) {
    this.isLoading = true;
    this.movieService.discover({ with_genres: this.id, page })
      .subscribe(res => {
        this.movies = res;
        this.isLoading = false;
      }, () => this.isLoading = false);
  }

}
