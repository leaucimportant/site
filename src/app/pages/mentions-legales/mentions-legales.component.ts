import { Component, OnInit } from '@angular/core';
import { Config, MatomoService, SeoService } from 'src/app/services';

@Component({
  selector: 'impactiv-mentions-legales',
  templateUrl: './mentions-legales.component.html',
  styleUrls: ['./mentions-legales.component.scss'],
})
export class MentionsLegalesComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private matomoService: MatomoService
  ) {}

  ngOnInit(): void {
    this.setSeo();
    this.matomoTrack();
  }

  private setSeo(): void {
    if (Config.seoMeta.mentionsLegales) {
      this.seoService.setPageSeo(Config.seoMeta.mentionsLegales);
    } else {
      console.warn('missing seoMeta.mentionsLegales');
    }
  }

  private matomoTrack(): void {
    if (Config.seoMeta.mentionsLegales) {
      this.matomoService.trackPageView(Config.seoMeta.mentionsLegales);
    } else {
      console.warn('missing seoMeta.mentionsLegales');
    }
  }
}
