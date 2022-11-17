import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  readonly routes = Config.impactivRoutes;
  constructor() {}

  ngOnInit(): void {}
}
