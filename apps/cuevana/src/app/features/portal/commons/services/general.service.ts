import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private genres: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor() { }

  get $genres(): Observable<any> {
    return this.genres.asObservable();
  }

  set $genres(values: any) {
    this.genres.next(values);
  }
}
