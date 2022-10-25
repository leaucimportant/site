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
      title: 'Affichage dynamique',
      description:
        'Communiquez et informez efficacement en temps réel. De l’étiquette connectée aux murs LEDs XXL.',
      link: `/${this.routes.screenSolution}`,
      id: this.impactivSolutions.screen,
    },
    {
      icon: 'affluence.png',
      alt: 'affluence',
      title: 'Gestion d’affluence',
      description:
        'Mesurez et analyser l’affluence dans votre établissement, améliorez la fluidité et l’expérience de vos clients ! En retail ou restauration, un outil au service de vos décisions stratégiques.',
      link: `/${this.routes.affluenceSolution}`,

      id: this.impactivSolutions.affluence,
    },
    {
      icon: 'integration.svg',
      alt: 'intégration',
      title: 'Développement sur mesure',
      description:
        'Accélérez votre développement en nous confiant un développement sur-mesure ou en réalisant une intégration ambitieuse.',
      link: `/${this.routes.dsmSolution}`,

      id: this.impactivSolutions.dsm,
    },
    {
      icon: 'app.svg',
      alt: 'application',
      title: 'Applications mobiles',
      description:
        'De la Web App aux applications natives & PWA. La solution tout-en-un au service de vos collaborateurs. Une solution digitale déployée à votre identité intégrant l’ensemble des services mis à disposition de vos clients/consommateurs !',
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
