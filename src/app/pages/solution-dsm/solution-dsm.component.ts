import { Component, OnInit } from '@angular/core';
import { Config, MatomoService, SeoService } from 'src/app/services';
@Component({
  selector: 'impactiv-solution-dsm',
  templateUrl: './solution-dsm.component.html',
  styleUrls: ['./solution-dsm.component.scss'],
})
export class SolutionDSMComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private matomoService: MatomoService
  ) {}
  solution = Config.impactivSolutions.dsm;

  imageQuote = 'assets/images/icons/short_logo.png';

  textQuote = $localize`:Text|dsm quote@@DSM-QUOTE:`;

  authorQuote = {
    job: "Impactiv' team",
  };

  blocks = [
    {
      title: $localize`:Text|dsm title block@@DSM-BLOCK-LISTENING-TITLE:`,
      description: $localize`:Text|dsm description block@@DSM-BLOCK-LISTENING-DESCRIPTION:`,
      image: {
        src: 'assets/images/contents/solutions/dsm/team.png',
        alt: 'affluence',
      },
    },
    {
      title: $localize`:Text|dsm title block@@DSM-BLOCK-INVOLVEMENT-TITLE:`,
      description: $localize`:Text|dsm description block@@DSM-BLOCK-INVOLVEMENT-DESCRIPTION:`,
      image: {
        src: 'assets/images/contents/solutions/dsm/note.png',
        alt: 'affluence',
      },
    },
    {
      title: $localize`:Text|dsm title block@@DSM-BLOCK-APP-TITLE:`,
      description: $localize`:Text|dsm description block@@DSM-BLOCK-APP-DESCRIPTION:`,
      image: {
        src: 'assets/images/contents/solutions/dsm/dev.png',
        alt: 'affluence',
      },
    },
    {
      title: $localize`:Text|dsm title block@@DSM-BLOCK-STRATEGIC-TITLE:`,
      description: $localize`:Text|dsm description block@@DSM-BLOCK-STRATEGIC-DESCRIPTION:`,
      image: {
        src: 'assets/images/contents/solutions/dsm/talk.png',
        alt: 'affluence',
      },
    },
  ];

  titleExpertise = 'Notre expertise';

  expertises = [
    {
      title: 'Méthodologies',
      items: [
        'Cahier des charges et recettages',
        'Intégration continue',
        'Déploiement continu',
        'Tests unitaires et fonctionnels',
        'Privacy by Design & Privacy by Default',
      ],
      image: 'assets/images/contents/solutions/common/methods.png',
      alt: 'alt',
    },
    {
      title: 'Développements',
      items: [
        'Développement Frontend',
        'Développement Backend',
        'Progressive Web App',
        'Applications natives',
      ],

      image: 'assets/images/contents/solutions/common/dev.png',
      alt: 'alt',
    },
    {
      title: 'Technologies',
      items: [
        'Serverless',
        'Micro Services',
        'Micro Frontends',
        'BDD relationnelle & orientée documents',
        'Agent de messages',
      ],

      image: 'assets/images/contents/solutions/common/stack.png',
      alt: 'alt',
    },
    {
      title: 'API & services',
      items: [
        'Authentification (SSO, OpenID…)',
        'API (GraphQL, REST)',
        'Emailing',
        'Analytics',
        'Passerelles de paiement (VAD)',
      ],

      image: 'assets/images/contents/solutions/common/api.png',
      alt: 'alt',
    },
  ];

  titleCarousel = 'Des solutions adaptées à vos besoins métier !';
  descriptionCarousel =
    'Parce que vos besoins métier sont uniques, nous déployons des solutions sur mesure orientées expérience utilisateur et excellence opérationnelle.';
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
    {
      src: 'assets/images/contents/solutions/dsm/aspp.png',
      alt: 'ASPP',
    },
  ];

  ngOnInit(): void {
    this.setSeo();
    this.matomoTrack();
  }
  private setSeo(): void {
    if (Config.seoMeta.dsmSolution) {
      this.seoService.setPageSeo(Config.seoMeta.dsmSolution);
    } else {
      console.warn('missing seoMeta.dsmSolution');
    }
  }

  private matomoTrack(): void {
    if (Config.seoMeta.dsmSolution) {
      this.matomoService.trackPageView(Config.seoMeta.dsmSolution);
    } else {
      console.warn('missing seoMeta.dsmSolution');
    }
  }
}
