import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '@cuevana-commons';
import { delay } from 'rxjs';
import { GeneralService } from '../../../../commons/services/general.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class PortalCategoryComponent implements OnInit {
  id: number;
  genre: string;
  movies: any = {};
  isLoading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private generalService: GeneralService,
    private scroller: ViewportScroller
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.setGenre();
      this.goToPage(1);

      setTimeout(() => {
        this.scroller.scrollToAnchor('movies_container');
      }, 1);
    });
  }

  setGenre() {
    this.generalService.$genres.subscribe((res: { id: number; name: string; }[]) => {
      this.genre = res.find(item => item.id == this.id)?.name;
    });
  }

  goToPage(page: number) {
    this.isLoading = true;
    this.movieService.discover({ with_genres: this.id, page })
      .pipe(delay(2000))
      .subscribe({
        next: res => {
          this.movies = res;
          this.isLoading = false;
        },
        error: () => this.isLoading = false
      });
  }

}
