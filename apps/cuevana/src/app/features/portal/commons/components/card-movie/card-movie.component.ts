import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '@cuevana-commons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})
export class CardMovieComponent implements OnInit {
  @Input() movie: any = {};
  details: any;
  subscription: Subscription;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    // console.log(this.movie);
  }

  enter() {
    this.leave();

    if (!this.details) {
      this.subscription = this.movieService.details(this.movie.id, this.movie.media_type).subscribe(res => {
        this.details = res;
      });
    }
  }

  leave() {
    // console.log('leave');
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
