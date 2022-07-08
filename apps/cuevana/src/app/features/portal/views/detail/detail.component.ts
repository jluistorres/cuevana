import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '@cuevana-commons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class PortalDetailComponent implements OnInit {
  movie: any = {};
  actors = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = +params.get('id');
      const type: any = params.get('type');
      this.getDetail(id, type);
    });
  }

  getDetail(id: number, type: string) {
    this.movieService.details(id, type).subscribe(res => {
      this.movie = res;
    });

    this.movieService.actors(id).subscribe(res => {
      this.actors = res.cast;
    });
  }

}
