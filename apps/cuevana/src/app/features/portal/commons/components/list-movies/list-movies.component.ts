import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  @Input() movies: any = {};
  @Output() changePage: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  previousPage() {
    if (this.movies.page > 1) {
      this.goToPage(this.movies.page - 1);
    }
  }

  nextPage() {
    if (this.movies.page < this.movies.total_pages) {
      this.goToPage(this.movies.page + 1);
    }
  }

  goToPage(page) {
    console.log(`Change page ${page}`);
    this.changePage.emit(page);

    /* this.movieService.popular(page).subscribe(res => {
      this.movies = res;
      // let params = new HttpParams();
      // if (page > 1) {
      //   params = params.set('page', page);
      // }

      // this.location.go('/', params.toString());
    }); */
  }

}
