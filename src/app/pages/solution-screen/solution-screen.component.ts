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
  titleCarousel = 'Un backoffice simple et puissant.';
  descriptionCarousel =
    'Pour nous, l’expérience de vos clients est toute aussi importante que celle de votre équipe. Pilotez l’ensemble de votre offre et de vos communications depuis un outil simple, performant et intuitif';

  imagesCarousel = [
    {
      src: 'assets/images/contents/solutions/dsm/sodexo.png',
      alt: 'Sodexo',
    },
    {
      src: 'assets/images/contents/solutions/dsm/la_mira.png',
      alt: 'La Mira',
    },
    {
      src: 'assets/images/contents/solutions/dsm/cdv.png',
      alt: 'Carte des vins',
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
