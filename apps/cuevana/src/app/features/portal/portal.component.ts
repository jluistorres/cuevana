import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from './commons/services/general.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private generalService: GeneralService
  ) { }

  ngOnInit() {
    const data = this.activatedRoute.snapshot.data;
    console.log("Data extraida del resolver", data);
    this.generalService.$genres = data.genres;
  }

}
