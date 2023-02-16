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
      title: $localize`:Text|title number@@NUMBERS-DEPLOYMENTS:`,
      src: 'assets/images/contents/numbers/deploiements.png',
    },
    {
      data: 10,
      suffix: $localize`:Text|suffix number@@NUMBERS-YEARS:`,
      title: $localize`:Text|title number@@NUMBERS-EXPERIENCE:`,
      src: 'assets/images/contents/numbers/experience.png',
    },
    {
      data: 6000,
      suffix: '+',
      title: $localize`:Text|title number@@NUMBERS-DEPLOYED-SCREENS:`,
      src: 'assets/images/contents/numbers/ecran.png',
    },
    {
      data: 1,
      suffix: $localize`:Text|suffix number@@NUMBERS-MILLION:`,
      title: 'De personnes utilisent nos solutions au quotidien !',
      src: 'assets/images/contents/numbers/personnes.png',
    },
    {
      data: 2,
      suffix: $localize`:Text|suffix number@@NUMBERS-MILLIONS:`,
      title: $localize`:Text|title number@@NUMBERS-TOTAL-CODE:`,
      src: 'assets/images/contents/numbers/code.png',
    },
    {
      data: 12000,
      suffix: '+',
      title: $localize`:Text|title number@@NUMBERS-CODE:`,
      src: 'assets/images/contents/numbers/soumission.png',
    },
  ];

  shuffled = this.numbers.sort(() => 0.5 - Math.random());
  selected = this.shuffled.slice(0, 2);
}
