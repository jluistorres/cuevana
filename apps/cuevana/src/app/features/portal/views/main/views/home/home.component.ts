import { Location } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '@cuevana-commons';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tagActive: string = 'popular';
  popular: any = {};
  isLoadingPopular = false;

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    const page = +this.activatedRoute.snapshot.queryParamMap.get('page');
    this.goToPage(page || 1);
  }

  previousPage(): void {
    if (this.popular.page > 1) {
      this.goToPage(this.popular.page - 1);
    }
  }

  nextPage(): void {
    if (this.popular.page < this.popular.total_pages) {
      this.goToPage(this.popular.page + 1);
    }
  }

  goToPage(page: number): void {
    this.isLoadingPopular = true;

    // Ejecución dinámica de un método
    this.movieService[this.tagActive](page)
      .pipe(
        delay(2000)
      )
      .subscribe({
        next: res => {
          this.popular = res;
          let params = new HttpParams();
          if (page > 1) {
            params = params.set('page', page);
          }

          this.location.go('/', params.toString());

          this.isLoadingPopular = false;
        },
        error: () => this.isLoadingPopular = false
      });
  }

  goToTag(tag: string): void {
    console.log(tag);
    this.tagActive = tag;
    this.goToPage(1);
  }  

}
