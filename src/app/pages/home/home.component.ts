import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'impactiv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  banner = {
    title: 'Votre expérience commence ici !',
    description:
      'Pour simplement échanger sur votre projet ou avoir une démonstration de nos solutions, nos équipes se tiennent à votre disposition.',
  };

  numbers = [
    {
      data: '1000+',
      title: 'Déploiement en Europe',
      description: 'Et ce n’est qu’un début !',
    },
    {
      data: '10 ans',
      title: 'D’expérience',
      description: 'Écoute, agilité et satisfaction, sont au coeur de nos préoccupations.',
    },
    {
      data: '6K',
      title: 'Écrans déployés',
      description: 'Un parc d’affichage dynamique monitoré en temps-réel !',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
