import { Component, OnInit } from '@angular/core';
import { Config, MatomoService, SeoService } from 'src/app/services';

@Component({
  selector: 'impactiv-solution-web-app',
  templateUrl: './solution-web-app.component.html',
  styleUrls: ['./solution-web-app.component.scss'],
})
export class SolutionWebAppComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private matomoService: MatomoService
  ) {}
  solution = Config.impactivSolutions.webApp;

  titleCarousel = 'Un backoffice simple et puissant.';
  descriptionCarousel =
    'L’expérience de vos clients est toute aussi importante que celle de votre équipe. Pilotez l’ensemble des services déployés depuis un outil simple et intuitif.';
  imagesCarousel = [
    {
      src: 'assets/images/contents/solutions/webapp/admin_menu.png',
      alt: 'Dashboard Application Collaborateurs',
    },
    {
      src: 'assets/images/contents/solutions/webapp/admin_actu.png',
      alt: 'Dashboard Application Collaborateurs Actualités',
    },
  ];

  ngOnInit(): void {
    this.setSeo();
    this.matomoTrack();
  }

  private setSeo(): void {
    if (Config.seoMeta.webAppSolution) {
      this.seoService.setPageSeo(Config.seoMeta.webAppSolution);
    } else {
      console.warn('missing seoMeta.mobileSolution');
    }
  }

  private matomoTrack(): void {
    if (Config.seoMeta.webAppSolution) {
      this.matomoService.trackPageView(Config.seoMeta.webAppSolution);
    } else {
      console.warn('missing seoMeta.mobileSolution');
    }
  }
}
