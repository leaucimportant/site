import { Component } from '@angular/core';
import { impactivRoutes } from 'src/app/services/config';

@Component({
  selector: 'impactiv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  hoveringIndex: null | number = null;
  contactRoute = impactivRoutes.contact;
  homeRoute = impactivRoutes.home;
  solutions = [
    {
      title: 'Affichage dynamique',
      description: 'Communiquer efficacement en temps réel.',
      icon: 'rectangle.svg',
      alt: 'rectangle',
      route: impactivRoutes.screenSolution,
    },
    {
      title: 'Application mobiles',
      description: 'Créez des applications dédiées pour le web.',
      icon: 'affichage.svg',
      alt: 'affichage',
      route: impactivRoutes.mobileSolution,
    },
    {
      title: 'Mesure d’affluence',
      description: 'Mesurez l’affluence en temps-réel.',
      icon: 'affluence.svg',
      alt: 'affluence',
      route: impactivRoutes.affluenceSolution,
    },
    {
      title: 'Intégration',
      description: 'Développement sur-mesure.',
      icon: 'security.svg',
      alt: 'sécurité',
      route: impactivRoutes.integrationSolution,
    },
  ];
  expertises = [];

  phone = '';
  phoneAreaCode = '+339';
  phoneStart = '5333';
  phoneEnd = '0360';
}
