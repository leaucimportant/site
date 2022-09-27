import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'impactiv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  hoveringIndex: null | number = null;
  solutions = [
    {
      title: 'Affichage dynamique',
      description: 'Communiquer et informer efficacement en temps réel.',
      icon: 'rectangle.svg',
      alt: 'rectangle',
    },
    {
      title: 'Application mobiles',
      description:
        'Créez des applications dédiées pour le web et les appareils mobiles grâce à notre expertise.',
      icon: 'affichage.svg',
      alt: 'affichage',
    },
    {
      title: 'Mesure d’affluence',
      description: 'Communiquer et informer efficacement en temps réel.',
      icon: 'affluence.svg',
      alt: 'affluence',
    },
    {
      title: 'Intégration',
      description:
        'Accélérez votre développement en nous confiant un développement sur-mesure.',
      icon: 'security.svg',
      alt: 'sécurité',
    },
  ];

  expertises = [];
}
