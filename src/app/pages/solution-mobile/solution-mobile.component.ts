import { Component, OnInit } from '@angular/core';
import { MatomoService, Config } from 'src/app/services';
import { SeoService } from 'src/app/services/seo.service';

@Component({
  selector: 'impactiv-solution-mobile',
  templateUrl: './solution-mobile.component.html',
  styleUrls: ['./solution-mobile.component.scss'],
})
export class SolutionMobileComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private matomoService: MatomoService
  ) {}
  banner = {
    title: 'Votre expérience commence ici !',
    description:
      'Pour simplement échanger sur votre projet ou avoir une démonstration de nos solutions, nos équipes se tiennent à votre disposition.',
    parallax: true,
  };

  quote = {
    description: 'de satisfaction client',
    name: 'Steve Attal',
    number: '100%',
    job: 'Responsable SI, Groupe Elior',
    avatar: 'assets/images/contents/quote/avatar_attal.png',
    logo: 'assets/images/contents/quote/elior.png',
    alt: 'Logo Elior',
    content:
      "Le groupe Elior cherche toujours des solutions digitales innovantes et rapides à mettre en œuvre. C’est une des raisons essentielles qui nous a fait choisir Impactiv. Nous avons toujours apprécié l’agilité et la rapidité d'exécution dont ils font preuve sur tous nos projets. Mais ce que j’apprécie le plus reste leur professionnalisme.",
  };

  ngOnInit(): void {
    this.setSeo();
    this.matomoTrack();
  }

  private setSeo(): void {
    if (Config.seoMeta.mobileSolution) {
      this.seoService.setPageSeo(Config.seoMeta.mobileSolution);
    } else {
      console.warn('missing seoMeta.mobileSolution');
    }
  }

  private matomoTrack(): void {
    if (Config.seoMeta.mobileSolution) {
      this.matomoService.trackPageView(Config.seoMeta.mobileSolution);
    } else {
      console.warn('missing seoMeta.mobileSolution');
    }
  }
}
