import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'impactiv-solution-carousel',
  templateUrl: './solution-carousel.component.html',
  styleUrls: ['./solution-carousel.component.scss'],
})
export class SolutionCarouselComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
