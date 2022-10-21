import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'impactiv-solution-affluence',
  templateUrl: './solution-affluence.component.html',
  styleUrls: ['./solution-affluence.component.scss']
})
export class SolutionAffluenceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  banner = {
    title: 'Votre expérience commence ici !',
    description:
      'Pour simplement échanger sur votre projet ou avoir une démonstration de nos solutions, nos équipes se tiennent à votre disposition.',
    parallax: true,
  };

}
