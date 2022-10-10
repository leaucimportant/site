import { Component, OnInit } from '@angular/core';
import { Config, MatomoService } from 'src/app/services';
import { SeoService } from 'src/app/services/seo.service';

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

  banner = {
    title: 'Votre expérience commence ici !',
    description:
      'Pour simplement échanger sur votre projet ou avoir une démonstration de nos solutions, nos équipes se tiennent à votre disposition.',
    parallax: false,
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
