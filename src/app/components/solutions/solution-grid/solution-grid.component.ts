import { Component, Input, OnInit } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-solution-grid',
  templateUrl: './solution-grid.component.html',
  styleUrls: ['./solution-grid.component.scss']
})
export class SolutionGridComponent implements OnInit {

  readonly routes = Config.impactivRoutes;

  constructor() { }

  ngOnInit(): void {
  }

  @Input() data!: {
    title: string;
    description: string;
    items: { image: string; subtitle: string, icon: string }[];
  };
}
