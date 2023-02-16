import { Component, OnInit } from '@angular/core';
import { Config, MatomoService, SeoService } from 'src/app/services';

@Component({
  selector: 'impactiv-solution-screen',
  templateUrl: './solution-screen.component.html',
  styleUrls: ['./solution-screen.component.scss'],
})
export class SolutionScreenComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private matomoService: MatomoService
  ) {}

  ngOnInit(): void {
    this.setSeo();
    this.matomoTrack();
  }

  solution = Config.impactivSolutions.screen;
  titleCarousel = $localize`:Text|title carousel screen@@SCREEN-CAROUSEL-TITLE:`;
  descriptionCarousel = $localize`:Text|description carousel screen@@SCREEN-CAROUSEL-DESCRIPTION:`;

  imagesCarousel = [
    {
      src: 'assets/images/contents/solutions/screen/mp1.png',
      alt: 'Back Office affichage dynamique',
    },
    {
      src: 'assets/images/contents/solutions/screen/mp2.png',
      alt: 'Back Office affichage dynamique',
    },
  ];

  private setSeo(): void {
    if (Config.seoMeta.screenSolution) {
      this.seoService.setPageSeo(Config.seoMeta.screenSolution);
    } else {
      console.warn('missing seoMeta.home');
    }
  }

  private matomoTrack(): void {
    if (Config.seoMeta.screenSolution) {
      this.matomoService.trackPageView(Config.seoMeta.screenSolution);
    } else {
      console.warn('missing seoMeta.home');
    }
  }
}
