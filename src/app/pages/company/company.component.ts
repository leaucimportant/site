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

  textQuote = $localize`:Text|quote@@COMPANY-QUOTE:`;

  authorQuote = {
    name: 'Jean-Christophe Allegret',
    job: $localize`:Text|name job@@COMPANY-GM:`,
  };

  titleSkills = $localize`:Text|quote@@SKILLS-TITLE:`;
  skills = [
    {
      title: $localize`:Text|company skills@@COMPANY-SKILLS-DESIGN:`,
      items: [
        $localize`:Text|company item design@@COMPANY-SKILLS-UX-UI:`,
        $localize`:Text|company item design@@COMPANY-SKILLS-ART:`,
        $localize`:Text|company item design@@COMPANY-SKILLS-MOTION:`,
        $localize`:Text|company item design@@COMPANY-SKILLS-PRINT:`,
      ],
      image: 'assets/images/contents/solutions/common/design.png',
      alt: 'alt',
    },
    {
      title: $localize`:Text|company skills@@COMPANY-SKILLS-DEVELOPMENT:`,
      items: [
        $localize`:Text|company item design@@COMPANY-SKILLS-PWA:`,
        $localize`:Text|company item design@@DSM-EXPERTISE-TECHNOLOGIES-SERVICES:`,
        $localize`:Text|company item design@@DSM-EXPERTISE-TECHNOLOGIES-FRONT:`,
        $localize`:Text|company item design@@COMPANY-SKILLS-SERVERLESS:`,
      ],

      image: 'assets/images/contents/solutions/common/dev.png',
      alt: 'alt',
    },
    {
      title: $localize`:Text|company skills@@COMPANY-SKILLS-INFRASTRUCTURE:`,
      items: [
        $localize`:Text|company item design@@COMPANY-SKILLS-CLOUD:`,
        $localize`:Text|company item design@@COMPANY-SKILLS-IAC:`,
        $localize`:Text|company item design@@DSM-EXPERTISE-METHODOLOGIES-CI:`,
        $localize`:Text|company item design@@DSM-MASONRY-SLA-TITLE:`,
      ],

      image: 'assets/images/contents/solutions/common/stack.png',
      alt: 'alt',
    },
    {
      title: $localize`:Text|company skills@@DSM-EXPERTISE-METHODOLOGIES:`,
      items: [
        $localize`:Text|company item design@@COMPANY-SKILLS-AGILE:`,
        $localize`:Text|company item design@@DSM-EXPERTISE-METHODOLOGIES-CD:`,
        $localize`:Text|company item design@@COMPANY-SKILLS-CONTACT:`,
        $localize`:Text|company item design@@COMPANY-SKILLS-CREATION:`,
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
