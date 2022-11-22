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

  imageQuote = 'assets/images/icons/dg-quote.png';

  textQuote =
    'Nous sommes producteur de solutions à forte valeur ajoutée, nos expertises, compétences et choix technologiques, qui composent notre écosystème, sont totalement impliqués sur chacun de nos projets pour le plus grand bénéfice de nos clients.';

  authorQuote = {
    name: 'Jean-Christophe Allegret',
    job: '- Directeur Général, Impactiv',
  };

  titleSkills = 'Une équipe dédiée à chacun de vos besoins.';
  skills = [
    {
      title: 'Design',
      items: ['UX & UI', 'Direction artistique', 'Motion', 'Print'],
      image: 'assets/images/contents/solutions/common/design.png',
      alt: 'alt',
    },
    {
      title: 'Développement',
      items: [
        'PWA & App Native',
        'Micro services',
        'Micro frontends',
        'Serverless & CaaS',
      ],

      image: 'assets/images/contents/solutions/common/dev.png',
      alt: 'alt',
    },
    {
      title: 'Infrastructure',
      items: ['Cloud & Sur Site', 'IaC', 'Déploiement continu', 'SLA'],

      image: 'assets/images/contents/solutions/common/stack.png',
      alt: 'alt',
    },
    {
      title: 'Méthodologies',
      items: [
        'Agile',
        'Intégration continue',
        'Interlocuteurs dédiés',
        'Co-création',
      ],
      image: 'assets/images/contents/solutions/common/methods.png',
      alt: 'alt',
    },
  ];

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
