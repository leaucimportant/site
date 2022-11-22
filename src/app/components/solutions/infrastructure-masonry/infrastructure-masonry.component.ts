import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-infrastructure-masonry',
  templateUrl: './infrastructure-masonry.component.html',
  styleUrls: ['./infrastructure-masonry.component.scss'],
})
export class InfrastructureMasonryComponent implements OnInit {
  isActive: boolean = false;

  readonly routes = Config.impactivRoutes;

  constructor() {}

  ngOnInit(): void {}
}
