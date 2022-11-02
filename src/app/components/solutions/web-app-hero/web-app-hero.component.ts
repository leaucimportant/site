import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-web-app-hero',
  templateUrl: './web-app-hero.component.html',
  styleUrls: ['./web-app-hero.component.scss'],
})
export class SolutionWebAppHeroComponent {
  readonly routes = Config.impactivRoutes;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollTo(anchor: string) {
    const anchorElement = this.document.getElementById(anchor);
    if (anchorElement) anchorElement.scrollIntoView();
  }
}
