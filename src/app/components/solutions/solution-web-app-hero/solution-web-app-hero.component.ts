import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-solution-web-app-hero',
  templateUrl: './solution-web-app-hero.component.html',
  styleUrls: ['./solution-web-app-hero.component.scss'],
})
export class SolutionWebAppHeroComponent {
  readonly routes = Config.impactivRoutes;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollTo(anchor: string) {
    const anchorElement = this.document.getElementById(anchor);
    if (anchorElement) anchorElement.scrollIntoView();
  }
}
