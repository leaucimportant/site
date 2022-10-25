import { DOCUMENT } from '@angular/common';
import { Component, Input, HostListener, Inject } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private window: Window
  ) {}

  readonly routes = Config.impactivRoutes;
  banner = {
    title: 'Votre expérience commence ici !',
    description:
      'Pour simplement échanger sur votre projet ou avoir une démonstration de nos solutions, nos équipes se tiennent à votre disposition.',
    parallax: false,
  };

  prevPosition = 0;
  bannerPositionItem1 = -100;
  bannerPositionItem2 = -200;
  bannerPositionItem3 = -30;

  @HostListener('window:scroll', [])
  diagonaleScroll() {
    const bannerGridItem1 = this.document.getElementById(
      'banner-parallax-item--1'
    );
    const bannerGridItem2 = this.document.getElementById(
      'banner-parallax-item--2'
    );
    const bannerGridItem3 = this.document.getElementById(
      'banner-parallax-item--3'
    );
    const currentPosition = this.window.scrollY;
    const bottomScrollPosition = this.window.innerHeight + this.window.scrollY;

    if (
      bannerGridItem1 &&
      bannerGridItem2 &&
      bannerGridItem3 &&
      bottomScrollPosition >= document.body.offsetHeight - 600
    )
      if (this.prevPosition < currentPosition) {
        this.bannerPositionItem1 += 2;
        this.bannerPositionItem2 -= 2;
        this.bannerPositionItem3 += 2;
        bannerGridItem1.style.transform = `translate3d(0px,${this.bannerPositionItem1}px,  0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        bannerGridItem2.style.transform = `translate3d(0px,${this.bannerPositionItem2}px,  0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        bannerGridItem3.style.transform = `translate3d(0px,${this.bannerPositionItem3}px,  0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
      } else {
        this.bannerPositionItem1 -= 2;
        this.bannerPositionItem2 += 2;
        this.bannerPositionItem3 -= 2;
        bannerGridItem1.style.transform = `translate3d(0px,${this.bannerPositionItem1}px,  0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        bannerGridItem2.style.transform = `translate3d(0px,${this.bannerPositionItem2}px,  0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
        bannerGridItem3.style.transform = `translate3d(0px,${this.bannerPositionItem3}px,  0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
      }
    this.prevPosition = currentPosition;
  }
}
