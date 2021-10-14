import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {
  @Input() height: any = '1em';
  @Input() radius: any = '0';

  constructor() { }

  ngOnInit() {
  }

}
