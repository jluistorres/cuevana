import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Event, NavigationStart, Router } from '@angular/router';
import { MovieService } from '@cuevana-commons';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('movieSearchInput', { static: true }) movieSearchInput: ElementRef;

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
    fromEvent(this.movieSearchInput.nativeElement, 'keyup')
      .pipe(
        //Para obtener el valor del elemento
        map((event: any) => {
          return event.target.value
        }),
        //Para trabajar con textos mayor a 2 caracteres
        filter(res => res.length > 2),
        //Demore 1s
        debounceTime(1000),
        //El valor es diferente al anterior
        distinctUntilChanged()
      ).subscribe(text => {
        this.movieService.search(text).subscribe(res => {
          this.listSearch = res.results;
        });
      });
  }

  /* search(event) {
    const text = event.target.value;
    this.movieService.search(text).subscribe(res => {
      this.listSearch = res.results;
    });
    // console.log('keyup', event.target.value);
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
