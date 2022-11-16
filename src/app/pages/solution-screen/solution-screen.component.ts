import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-solution-screen',
  templateUrl: './solution-screen.component.html',
  styleUrls: ['./solution-screen.component.scss']
})
export class SolutionScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  solution = Config.impactivSolutions.screen;
  titleCarousel = 'Un backoffice simple et puissant.';
  descriptionCarousel =
    'Pour nous, l’expérience de vos clients est toute aussi importante que celle de votre équipe. Pilotez l’ensemble de votre offre et de vos communications depuis un outil simple, performant et intuitif';

  imagesCarousel = [
    {
      src: 'assets/images/contents/solutions/dsm/sodexo.png',
      alt: 'Sodexo',
    },
    {
      src: 'assets/images/contents/solutions/dsm/la_mira.png',
      alt: 'La Mira',
    },
    {
      src: 'assets/images/contents/solutions/dsm/cdv.png',
      alt: 'Carte des vins',
    },
  ];
}
