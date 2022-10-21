import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-solution-affluence-hero',
  templateUrl: './solution-affluence-hero.component.html',
  styleUrls: ['./solution-affluence-hero.component.scss']
})
export class SolutionAffluenceHeroComponent {
  readonly routes = Config.impactivRoutes;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollTo(anchor: string) {
    const anchorElement = this.document.getElementById(anchor);
    if (anchorElement) anchorElement.scrollIntoView();
  }

}
