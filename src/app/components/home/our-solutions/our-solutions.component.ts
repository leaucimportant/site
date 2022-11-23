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
      title: 'Affichage dynamique',
      description:
        'Communiquer et informer efficacement en temps réel. De l’étiquette connectée aux murs LEDs XXL.',
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
      title: 'Application collaborateurs',
      description:
        'De la Web App aux applications natives & PWA. La solution tout-en-un au service de vos collaborateurs. Une solution digitale déployée à votre identité intégrant l’ensemble des services mis à disposition de vos clients/consommateurs !',
      icon: {
        src: 'affichage.svg',
        alt: 'affichage',
      },
      image: {
        src: 'mobile.png',
        alt: 'mobile',
      },
      route: impactivRoutes.webAppSolution,
    },
    {
      title: 'Gestion d’affluence',
      description:
        'Mesurez et analysez l’affluence dans votre établissement, améliorez la fluidité et l’expérience de vos clients !  En retail ou restauration, un outil au service de vos décisions stratégiques.',
      icon: {
        src: 'affluence.svg',
        alt: 'affluence',
      },
      image: {
        src: 'affluence.png',
        alt: 'affluence',
      },
      route: impactivRoutes.affluenceSolution,
    },
    {
      title: 'Développement sur mesure',
      description:
        'Développement sur-mesure ou intégration ambitieuse, nous créons pour vous des outils métier à forte valeur ajoutée.',
      icon: {
        src: 'security.svg',
        alt: 'sécurité',
      },
      image: {
        src: 'integration.png',
        alt: 'integration',
      },
      route: impactivRoutes.dsmSolution,
    },
  ];
}
