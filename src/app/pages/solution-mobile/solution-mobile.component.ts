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

  constructor() {}

  ngOnInit(): void {}
}
