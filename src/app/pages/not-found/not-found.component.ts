import { Component, OnInit } from '@angular/core';
import { Config, MatomoService, SeoService } from 'src/app/services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'impactiv-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private matomoService: MatomoService
  ) {}

  ngOnInit(): void {
    this.seoService.setNoIndex();
    this.matomoService.trackPageView({
      title: '404',
      url: environment.siteUri.concat('/', Config.impactivRoutes.notFound),
    });
  }
  ngOnDestroy(): void {
    this.seoService.removeNoIndex();
  }
}
