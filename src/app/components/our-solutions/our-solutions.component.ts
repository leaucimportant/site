import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'impactiv-our-solutions',
  templateUrl: './our-solutions.component.html',
  styleUrls: ['./our-solutions.component.scss'],
})
export class OurSolutionsComponent {
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
    },
    {
      title: 'Application mobiles',
      description:
        'Créez des applications dédiées pour le web et les appareils mobiles grâce à notre expertise. De la Web App aux applications natives & PWA.',
      icon: {
        src: 'affichage.svg',
        alt: 'affichage',
      },
      image: {
        src: 'mobile.png',
        alt: 'mobile',
      },
    },
    {
      title: 'Mesure d’affluence',
      description:
        'Mesurez l’affluence en temps-réel et améliorez la fluidité et l’expérience utilisateur. Du comptage à l’analyse de votre affluence pour adapter votre stratégie.',
      icon: {
        src: 'affluence.svg',
        alt: 'affluence',
      },
      image: {
        src: 'affluence.png',
        alt: 'affluence',
      },
    },
    {
      title: 'Intégration',
      description:
        'Accélérez votre développement en nous confiant un développement sur-mesure.',
      icon: {
        src: 'security.svg',
        alt: 'sécurité',
      },
      image: {
        src: 'integration.png',
        alt: 'integration',
      },
    },
  ];
}
