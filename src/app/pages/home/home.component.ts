import { Component, OnInit } from '@angular/core';
import { Config, MatomoService, SeoService } from 'src/app/services';

@Component({
  selector: 'impactiv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private matomoService: MatomoService
  ) {}

  solution = Config.impactivSolutions.all;

  ngOnInit(): void {
    this.setSeo();
    this.matomoTrack();
  }

  private setSeo(): void {
    if (Config.seoMeta.home) {
      this.seoService.setPageSeo(Config.seoMeta.home);
    } else {
      console.warn('missing seoMeta.home');
    }
  }

  private matomoTrack(): void {
    if (Config.seoMeta.home) {
      this.matomoService.trackPageView(Config.seoMeta.home);
    } else {
      console.warn('missing seoMeta.home');
    }
  }
}
