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
      title: 'Déploiements en Europe',
      src: 'assets/images/contents/numbers/deploiements.png',
    },
    {
      data: 10,
      suffix: 'ans',
      title: 'D’expérience',
      src: 'assets/images/contents/numbers/experience.png',
    },
    {
      data: 6000,
      suffix: '+',
      title: 'Écrans déployés',
      src: 'assets/images/contents/numbers/ecran.png',
    },
    {
      data: 1,
      suffix: 'Million',
      title: 'De personnes utilisent nos solutions au quotidien !',
      src: 'assets/images/contents/numbers/personnes.png',
    },
    {
      data: 2,
      suffix: 'Millions',
      title: 'De lignes de code',
      src: 'assets/images/contents/numbers/code.png',
    },
    {
      data: 12000,
      suffix: '+',
      title: 'Soumissions de code sur les 3 derniers mois',
      src: 'assets/images/contents/numbers/soumission.png',
    },
  ];

  shuffled = this.numbers.sort(() => 0.5 - Math.random());
  selected = this.shuffled.slice(0, 2);
}
