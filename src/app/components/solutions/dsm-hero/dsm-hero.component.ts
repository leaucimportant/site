import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-solution-dsm-hero',
  templateUrl: './dsm-hero.component.html',
  styleUrls: ['./dsm-hero.component.scss'],
})
export class DsmHeroComponent {
  readonly routes = Config.impactivRoutes;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollTo(anchor: string) {
    const anchorElement = this.document.getElementById(anchor);
    if (anchorElement) anchorElement.scrollIntoView();
  }
}
