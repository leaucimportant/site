import { Component, OnInit } from '@angular/core';
import { Config, MatomoService, SeoService } from 'src/app/services';

@Component({
  selector: 'impactiv-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private matomoService: MatomoService
  ) {}

  ngOnInit(): void {
    this.setSeo();
    this.matomoTrack();
  }

  private setSeo(): void {
    if (Config.seoMeta.company) {
      this.seoService.setPageSeo(Config.seoMeta.company);
    } else {
      console.warn('missing seoMeta.company');
    }
  }

  private matomoTrack(): void {
    if (Config.seoMeta.company) {
      this.matomoService.trackPageView(Config.seoMeta.company);
    } else {
      console.warn('missing seoMeta.company');
    }
  }
}
