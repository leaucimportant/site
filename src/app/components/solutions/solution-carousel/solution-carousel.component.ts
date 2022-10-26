import { Component, Input } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-solution-carousel',
  templateUrl: './solution-carousel.component.html',
  styleUrls: ['./solution-carousel.component.scss'],
})
export class SolutionCarouselComponent {
  contactRoute = Config.impactivRoutes.contact;

  @Input() title!: string;
  @Input() description!: string;
  @Input() images!: { src: string; alt: string }[];
}
