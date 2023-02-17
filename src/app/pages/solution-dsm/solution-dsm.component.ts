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

  titleExpertise = $localize`:Text|dsm quote@@DSM-EXPERTISE-TITLE:`;

  expertises = [
    {
      title: $localize`:Text|dsm methodologies@@DSM-EXPERTISE-METHODOLOGIES:`,
      items: [
        $localize`:Text|dsm item methodologies@@DSM-EXPERTISE-METHODOLOGIES-SPECIFICATIONS:`,
        $localize`:Text|dsm item methodologies@@DSM-EXPERTISE-METHODOLOGIES-CI:`,
        $localize`:Text|dsm item methodologies@@DSM-EXPERTISE-METHODOLOGIES-CD:`,
        $localize`:Text|dsm item methodologies@@DSM-EXPERTISE-METHODOLOGIES-TEST:`,
        $localize`:Text|dsm item methodologies@@DSM-EXPERTISE-METHODOLOGIES-PRIVACY:`,
      ],
      image: 'assets/images/contents/solutions/common/methods.png',
      alt: 'alt',
    },
    {
      title: $localize`:Text|dsm developments@@DSM-EXPERTISE-DEVELOPMENTS:`,
      items: [
        $localize`:Text|dsm item developments@@DSM-EXPERTISE-DEVELOPMENTS-FRONT:`,
        $localize`:Text|dsm item developments@@DSM-EXPERTISE-DEVELOPMENTS-BACK:`,
        $localize`:Text|dsm item developments@@DSM-EXPERTISE-DEVELOPMENTS-PWA:`,
        $localize`:Text|dsm item developments@@DSM-EXPERTISE-DEVELOPMENTS-NATIVE:`,
      ],
      image: 'assets/images/contents/solutions/common/dev.png',
      alt: 'alt',
    },
    {
      title: $localize`:Text|dsm technologies@@DSM-EXPERTISE-TECHNOLOGIES:`,
      items: [
        $localize`:Text|dsm item technologies@@DSM-EXPERTISE-TECHNOLOGIES-SERVERLESS:`,
        $localize`:Text|dsm item technologies@@DSM-EXPERTISE-TECHNOLOGIES-SERVICES:`,
        $localize`:Text|dsm item technologies@@DSM-EXPERTISE-TECHNOLOGIES-FRONT:`,
        $localize`:Text|dsm item technologies@@DSM-EXPERTISE-TECHNOLOGIES-BDD:`,
        $localize`:Text|dsm item technologies@@DSM-EXPERTISE-TECHNOLOGIES-MESSAGE:`,
      ],
      image: 'assets/images/contents/solutions/common/stack.png',
      alt: 'alt',
    },
    {
      title: $localize`:Text|dsm api@@DSM-EXPERTISE-API:`,
      items: [
        $localize`:Text|dsm item api@@DSM-EXPERTISE-API-AUTH:`,
        $localize`:Text|dsm item api@@DSM-EXPERTISE-API-API:`,
        $localize`:Text|dsm item api@@DSM-EXPERTISE-API-EMAIL:`,
        $localize`:Text|dsm item api@@DSM-EXPERTISE-API-ANALYTICS:`,
        $localize`:Text|dsm item api@@DSM-EXPERTISE-API-VAD:`,
      ],
      image: 'assets/images/contents/solutions/common/api.png',
      alt: 'alt',
    },
  ];

  titleCarousel = $localize`:Text|dsm carousel@@DSM-CAROUSEL-TITLE:`;
  descriptionCarousel = $localize`:Text|dsm carousel@@DSM-CAROUSEL-DESCRIPTION:`;

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
