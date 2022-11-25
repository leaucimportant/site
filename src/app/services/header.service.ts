import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private window: Window
  ) {}
  body = this.document.getElementById('body');

  deactivateScroll() {
    const overlay = this.document.getElementById('overlay');
    const navbar = this.document.getElementById('navbar');
    const toggler = this.document.getElementById('navbar-toggler');
    if (
      this.body &&
      this.window.innerWidth < 1140 &&
      overlay &&
      navbar &&
      toggler &&
      toggler.ariaExpanded
    ) {
      if (/true/i.test(toggler.ariaExpanded)) {
        this.body.style.overflow = 'hidden';
        overlay.style.display = 'block';
        navbar.style.backgroundColor = 'var(--bs-white)';
      } else {
        this.body.style.overflow = 'auto';
        overlay.style.display = 'none';
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
      }
    }
  }
}
