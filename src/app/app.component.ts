import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { Subscription } from 'rxjs';
import { impactivRoutes } from './services/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  routerSubscription: Subscription;
  backgroundImage = '../assets/images/bg/gradient-background.png';

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.routerSubscription = router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        switch (event.url.replace('/', '')) {
          case impactivRoutes.contact:
            this.backgroundImage = '../assets/images/bg/blue-background.png';
            break;
          case impactivRoutes.mobile:
            this.backgroundImage = '../assets/images/bg/purple-background.png';
            break;
          default:
            this.backgroundImage =
              '../assets/images/bg/gradient-background.png';
        }
      }
    });
  }
  ngOnDestroy(): void {
    this.routerSubscription?.unsubscribe();
  }

  title = 'impactiv-siteweb';
}
