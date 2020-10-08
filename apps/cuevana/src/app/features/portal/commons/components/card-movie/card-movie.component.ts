import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '@cuevana-commons';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {
  @Input() movie: any = {};
  details: any;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  enter() {
    if (!this.details) {
      this.movieService.details(this.movie.id, this.movie.media_type).subscribe(res => {
        this.details = res;
      });
    }
  }

}
