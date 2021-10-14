import { Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationStart, Router, Event, ActivatedRoute } from '@angular/router';
import { MovieService } from '@cuevana-commons';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('movieSearchInput', { static: true }) movieSearchInput: ElementRef;

  // generos = [];
  generos = [
    {
      "id": 28,
      "name": "Acción"
    },
    {
      "id": 12,
      "name": "Aventura"
    },
    {
      "id": 16,
      "name": "Animación"
    },
    {
      "id": 35,
      "name": "Comedia"
    },
    {
      "id": 80,
      "name": "Crimen"
    },
    {
      "id": 99,
      "name": "Documental"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Familia"
    },
    {
      "id": 14,
      "name": "Fantasía"
    },
    {
      "id": 36,
      "name": "Historia"
    },
    {
      "id": 27,
      "name": "Terror"
    },
    {
      "id": 10402,
      "name": "Música"
    },
    {
      "id": 9648,
      "name": "Misterio"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Ciencia ficción"
    },
    {
      "id": 10770,
      "name": "Película de TV"
    },
    {
      "id": 53,
      "name": "Suspense"
    },
    {
      "id": 10752,
      "name": "Bélica"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ];

  listSearch = [];
  isShow: boolean;
  toggleMenu: boolean;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.generos = this.activatedRoute.snapshot.data.genres || [];

    fromEvent(this.movieSearchInput.nativeElement, 'keyup').pipe(

      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      , filter(res => res.length > 2)

      // Time in milliseconds between key events
      , debounceTime(1000)

      // If previous query is diffent from current   
      , distinctUntilChanged()

      // subscription for response
    ).subscribe(text => {
      this.movieService.search(text).subscribe(res => {
        this.listSearch = res.results;
      });
    });

    this.events();
  }

  /* search(event) {
    const key = event.target.value;
    if (key?.length < 3) {
      return;
    }

    this.movieService.search(key).subscribe(res => {
      this.listSearch = res.results;
    });
  } */

  submit(form) {
    console.log(form);
    this.router.navigate(['/search'], { queryParams: form });
  }

  /* @HostListener('document:click', ['$event.target'])
  outSuggest(targetElement: any) {
    if (!document.querySelector('.search')?.contains(targetElement) &&
      !targetElement.classList.contains('search')) {
      this.isShow = false;
    }
  } */

  toggle() {
    this.toggleMenu = !this.toggleMenu;
    if (this.toggleMenu) {
      document.body.classList.add('open');
    } else {
      document.body.classList.remove('open');
    }
  }

  events() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        if (!this.toggleMenu) {
          return;
        }

        this.toggleMenu = false;
        document.body.classList.remove('open');
      }
    });
  }

}
