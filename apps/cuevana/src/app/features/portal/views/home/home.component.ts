import { Component, OnInit } from '@angular/core';
import { MovieService } from '@cuevana-commons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class PortalHomeComponent implements OnInit {
  trending = [];
  rated = [];
  popular = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.trending().subscribe(res => {
      this.trending = res.results.slice(0, 7);
    });

    this.movieService.rated().subscribe(res => {
      this.rated = res.results.slice(0, 9);
    });

    this.movieService.popular().subscribe(res => {
      this.popular = res.results;
    });
  }

}
