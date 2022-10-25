import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-solution-carousel',
  templateUrl: './solution-carousel.component.html',
  styleUrls: ['./solution-carousel.component.scss'],
})
export class SolutionCarouselComponent {
  contactRoute = Config.impactivRoutes.contact;

  images = [
    {
      src: 'assets/images/contents/solutions/common/affluence.png',
      alt: 'affluence',
    },
    {
      src: 'assets/images/contents/solutions/common/ecran.png',
      alt: 'ecran',
    },
  ];
}
