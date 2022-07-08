import { Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigationStart, Router, Event, ActivatedRoute } from '@angular/router';
import { MovieService } from '@cuevana-commons';
import { of } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap, catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchControl = new FormControl();

  generos = [];
  listSearch = [];
  isLoadingSearch: boolean;
  isShow: boolean;
  toggleMenu: boolean;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.generos = this.activatedRoute.snapshot.data.genres || [];

    this.searchControl.valueChanges
      .pipe(
        tap(() => {
          this.listSearch = [];
          this.isLoadingSearch = false;
          this.isShow = false;
        })

        // Si la longitud del carácter es mayor que 1
        , filter(value => value?.length > 1)

        , tap(() => {
          this.isShow = true;
          this.isLoadingSearch = true;
        })

        // Tiempo en milisegundos entre eventos clave
        , debounceTime(1000)

        // Si la consulta anterior es diferente de la actual 
        , distinctUntilChanged()

        // Cambiamos el observable a retornar
        , switchMap(value => {
          return this.movieService.search(value)
            .pipe(
              map(res => res.results),
              catchError(() => of([]))
            )
        })

        // subscription for response
      ).subscribe((res: any[]) => {
        this.isLoadingSearch = false;
        this.listSearch = res;
      });

    this.events();
  }

  submit() {
    this.listSearch = [];
    this.router.navigate(['/buscar'], { queryParams: { s: this.searchControl.value } });
    this.searchControl.reset();
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
