import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Event, Router, Scroll } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { HeaderService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private headerService: HeaderService
  ) {
    this.routerEventsSubscription = this.forceScrollOnRouterScrollEvent(
      this.router,
      this.viewportScroller
    );
  }
  routerEventsSubscription?: Subscription;

  ngOnDestroy(): void {
    this.routerEventsSubscription?.unsubscribe();
  }

  forceScrollOnRouterScrollEvent(
    router: Router,
    viewportScroller: ViewportScroller
  ): Subscription {
    return router.events
      .pipe(filter((event: Event): event is Scroll => event instanceof Scroll))
      .subscribe((event) => {
        setTimeout(() => {
          if (event.position) {
            viewportScroller.scrollToPosition(event.position);
          } else if (event.anchor) {
            viewportScroller.scrollToAnchor(event.anchor);
          } else {
            viewportScroller.scrollToPosition([0, 1]);
            viewportScroller.scrollToPosition([0, 0]);
          }
        });
      });
  }

  deactivateScroll() {
    this.headerService.deactivateScroll();
  }
}
