import { Component } from '@angular/core';
import { impactivRoutes } from 'src/app/services/config';

@Component({
  selector: 'impactiv-our-solutions',
  templateUrl: './our-solutions.component.html',
  styleUrls: ['./our-solutions.component.scss'],
})
export class OurSolutionsComponent {
  impactivRoutes = impactivRoutes;
  solutions = [
    {
      title: $localize`:Text|title our solutions@@DIGITAL-SIGNAGE:`,
      description: $localize`:Text|card description@@CARD-DESCRIPTION-DIGITAL-SIGNAGE:`,
      icon: {
        src: 'rectangle.svg',
        alt: 'rectangle',
      },
      image: {
        src: 'ecran.png',
        alt: 'ecran',
      },
      route: impactivRoutes.screenSolution,
    },
    {
      title: $localize`:Text|title our solutions@@WEB-APP:`,
      description: $localize`:Text|card description@@CARD-DESCRIPTION-WEB-APP:`,
      icon: {
        src: 'app.svg',
        alt: 'affichage',
      },
      image: {
        src: 'mobile.png',
        alt: 'mobile',
      },
      route: impactivRoutes.webAppSolution,
    },
    {
      title: $localize`:Text|title our solutions@@AFFLUENCE:`,
      description: $localize`:Text|card description@@CARD-DESCRIPTION-AFFLUENCE:`,
      icon: {
        src: 'affluence.png',
        alt: 'affluence',
      },
      image: {
        src: 'affluence.png',
        alt: 'affluence',
      },
      route: impactivRoutes.affluenceSolution,
    },
    {
      title: $localize`:Text|title our solutions@@SPECIFIC-DEVELOPMENT:`,
      description: $localize`:Text|card description@@CARD-DESCRIPTION-SPECIFIC-DEVELOPMENT:`,
      icon: {
        src: 'integration.svg',
        alt: 'integration',
      },
      image: {
        src: 'integration.png',
        alt: 'integration',
      },
      route: impactivRoutes.dsmSolution,
    },
  ];
}
