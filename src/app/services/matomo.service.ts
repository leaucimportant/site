import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface MatomoHolder extends Window {
  _paq: { push: Array<unknown>['push'] };
}

@Injectable({
  providedIn: 'root',
})
export class MatomoService {
  constructor(private window: Window) {
    (this.window as MatomoHolder)._paq =
      (this.window as MatomoHolder)._paq || [];
  }

  trackPageView({ title, url }: { title: string; url: string }): void {
    if (environment.production) {
      (this.window as MatomoHolder)._paq.push(['setCustomUrl', url]);
      (this.window as MatomoHolder)._paq.push(['setDocumentTitle', title]);
      (this.window as MatomoHolder)._paq.push(['trackPageView']);
      (this.window as MatomoHolder)._paq.push(['enableLinkTracking']);
      (this.window as MatomoHolder)._paq.push(['enableHeartBeatTimer']);
    }
  }
}
