import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-other-solutions',
  templateUrl: './other-solutions.component.html',
  styleUrls: ['./other-solutions.component.scss'],
})
export class OtherSolutionsComponent implements OnChanges {
  @Input() solutionToDelete!: string;

  routes = Config.impactivRoutes;

  impactivSolutions = Config.impactivSolutions;

  solutions = [
    {
      icon: 'rectangle.svg',
      alt: 'affichage dynamique',
      title: $localize`:Text|card solution @@DIGITAL-SIGNAGE:`,
      description: $localize`:Text|card description@@CARD-DESCRIPTION-DIGITAL-SIGNAGE:`,
      link: `/${this.routes.screenSolution}`,
      id: this.impactivSolutions.screen,
    },
    {
      icon: 'affluence.png',
      alt: 'affluence',
      title: $localize`:Text|card solution@@AFFLUENCE:`,
      description: $localize`:Text|card description@@CARD-DESCRIPTION-AFFLUENCE:`,
      link: `/${this.routes.affluenceSolution}`,

      id: this.impactivSolutions.affluence,
    },
    {
      icon: 'integration.svg',
      alt: 'intégration',
      title: $localize`:Text|card solution@@SPECIFIC-DEVELOPMENT:`,
      description: $localize`:Text|card description@@CARD-DESCRIPTION-SPECIFIC-DEVELOPMENT:`,
      link: `/${this.routes.dsmSolution}`,

      id: this.impactivSolutions.dsm,
    },
    {
      icon: 'app.svg',
      alt: 'application',
      title: $localize`:Text|card solution@@WEB-APP:`,
      description: $localize`:Text|card description@@CARD-DESCRIPTION-WEB-APP:`,
      link: `/${this.routes.webAppSolution}`,
      id: this.impactivSolutions.webApp,
    },
  ];

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['solutionToDelete'] && this.solutionToDelete)
      this.solutions = this.solutions.filter(
        (solution) => solution.id !== this.solutionToDelete
      );
  }
}
