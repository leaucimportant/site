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
    },
    {
      data: 10,
      suffix: 'ans',
      title: 'D’expérience',
    },
    {
      data: 6000,
      suffix: '+',
      title: 'Écrans déployés',
    },
    {
      data: 1,
      suffix: 'Milion',
      title: 'De personnes utilisent nos solutions au quotidien !',
    },
    {
      data: 2,
      suffix: 'Milion',
      title: 'De lignes de code',
    },
  ];

  shuffled = this.numbers.sort(() => 0.5 - Math.random());
  selected = this.shuffled.slice(0, 3);
}
