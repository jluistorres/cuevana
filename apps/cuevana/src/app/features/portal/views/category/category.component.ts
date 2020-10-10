import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '@cuevana-commons';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class PortalCategoryComponent implements OnInit {

  codigo: number;
  movies: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    /* const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.codigo = id; */

    this.activatedRoute.paramMap.subscribe(params => {
      this.codigo = +params.get('id');
      this.search();
    });
  }

  search(page: number = 1) {
    this.movieService.discover({ with_genres: this.codigo, page }).subscribe(res => {
      this.movies = res;
    });
  }

}
