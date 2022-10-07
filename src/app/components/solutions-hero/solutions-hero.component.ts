import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-solutions-hero',
  templateUrl: './solutions-hero.component.html',
  styleUrls: ['./solutions-hero.component.scss'],
})
export class SolutionsHeroComponent {
  readonly routes = Config.impactivRoutes;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollTo(anchor: string) {
    const anchorElement = this.document.getElementById(anchor);
    if (anchorElement) anchorElement.scrollIntoView();
  }
}
