import { Component, Input } from '@angular/core';

@Component({
  selector: 'impactiv-solution-card',
  templateUrl: './solution-card.component.html',
  styleUrls: ['./solution-card.component.scss'],
})
export class SolutionCardComponent {
  @Input() solution!: {
    title: string;
    description: string;
    icon: {
      src: string;
      alt: string;
    };
    image: {
      src: string;
      alt: string;
    };
    route: string;
  };

  @Input() index!: number;
}
