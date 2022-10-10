import { Component } from '@angular/core';

@Component({
  selector: 'impactiv-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent {
  constructor() {}
  numbers = [
    {
      data: 1000,
      suffix: '+',
      title: 'Déploiement en Europe',
      description: 'Et ce n’est qu’un début !',
    },
    {
      data: 10,
      suffix: 'ans',
      title: 'D’expérience',
      description:
        'Écoute, agilité et satisfaction, sont au coeur de nos préoccupations.',
    },
    {
      data: 6000,
      suffix: '+',
      title: 'Écrans déployés',
      description: 'Un parc d’affichage dynamique monitoré en temps-réel !',
    },
    {
      data: 1,
      suffix: 'M',
      title: 'De personnes utilisent nos solutions au quotidien !',
    },
    {
      data: 2,
      suffix: 'M',
      title: 'De lignes de code',
    },
  ];

  shuffled = this.numbers.sort(() => 0.5 - Math.random());
  selected = this.shuffled.slice(0, 3);
}
