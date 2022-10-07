import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'impactiv-solution-mobile',
  templateUrl: './solution-mobile.component.html',
  styleUrls: ['./solution-mobile.component.scss'],
})
export class SolutionMobileComponent implements OnInit {
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
      description:
        'Écoute, agilité et satisfaction, sont au coeur de nos préoccupations.',
    },
    {
      data: '6K',
      title: 'Écrans déployés',
      description: 'Un parc d’affichage dynamique monitoré en temps-réel !',
    },
  ];

  quote = {
    description: 'de satisfaction client',
    name: 'Steve Attal',
    number: '100%',
    job: 'Responsable SI, Groupe Elior',
    avatar: 'assets/images/contents/quote/avatar_attal.png',
    logo: 'assets/images/contents/quote/elior.png',
    alt: 'Logo Elior',
    content:
      'Le groupe Elior cherche toujours des solutions digitales innovantes et rapides à mettre en œuvre. C’est une des raisons essentielles qui nous a fait choisir Impactiv. Nous avons toujours apprécié l’agilité et la rapidité d\'exécution dont ils font preuve sur tous nos projets. Mais ce que j’apprécie le plus reste leur professionnalisme.',
  };

  constructor() {}

  ngOnInit(): void {}
}
