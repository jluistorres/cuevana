import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '@cuevana-commons';

@Component({
  selector: 'app-portal-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class PortalSearchComponent implements OnInit, OnDestroy {
  keywords: string;
  movies: any = {};
  carousel: HTMLElement;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.keywords = params.get('s');
      this.goToPage(1);
    });

    // Ocultamos el carousel principal y lo mostramos nuevamente cuando se destruye el componente
    this.carousel = document.querySelector('#carousel-wrapper') as HTMLElement;
    this.carousel.style.display = 'none';
  }

  goToPage(page: number) {
    // console.log(page, this.keywords);
    this.movieService.search(this.keywords, page).subscribe(res => {
      this.movies = res;
    });
  }

  ngOnDestroy(): void {
    this.carousel.style.display = 'block';
  }

}
