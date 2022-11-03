import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { impactivRoutes } from 'src/app/services/config';

@Component({
  selector: 'impactiv-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss'],
})
export class HomeHeroComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private window: Window
  ) {}

  contactRoute = impactivRoutes.contact;

  prevPosition = 0;
  positionItem1 = -30;
  positionItem2 = 50;
  positionItem3 = -30;

  @HostListener('window:scroll', [])
  diagonaleScroll() {
    const gridItem1 = this.document.getElementById('parallax-item--1');
    const gridItem2 = this.document.getElementById('parallax-item--2');
    const gridItem3 = this.document.getElementById('parallax-item--3');
    const currentPosition = this.window.scrollY;

    if (gridItem1 && gridItem2 && gridItem3 && currentPosition < 650)
      if (this.prevPosition < currentPosition) {
        this.positionItem1 += 2;
        this.positionItem2 -= 2;
        this.positionItem3 += 2;
        gridItem1.style.transform = `translate3d(0px,${this.positionItem1}px,  0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        gridItem2.style.transform = `translate3d(0px,${this.positionItem2}px,  0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        gridItem3.style.transform = `translate3d(0px,${this.positionItem3}px,  0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
      } else {
        this.positionItem1 -= 4;
        this.positionItem2 += 2;
        this.positionItem3 -= 4;
        gridItem1.style.transform = `translate3d(0px,${this.positionItem1}px,  0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        gridItem2.style.transform = `translate3d(0px,${this.positionItem2}px,  0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        gridItem3.style.transform = `translate3d(0px,${this.positionItem3}px,  0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
      }
    this.prevPosition = currentPosition;
  }

  scrollTo(anchor: string) {
    const anchorElement = this.document.getElementById(anchor);
    if (anchorElement) anchorElement.scrollIntoView();
  }
}
