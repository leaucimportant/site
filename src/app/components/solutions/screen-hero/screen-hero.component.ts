import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-screen-hero',
  templateUrl: './screen-hero.component.html',
  styleUrls: ['./screen-hero.component.scss']
})
export class ScreenHeroComponent {
  readonly routes = Config.impactivRoutes;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollTo(anchor: string) {
    const anchorElement = this.document.getElementById(anchor);
    if (anchorElement) anchorElement.scrollIntoView();
  }
}
