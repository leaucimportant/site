import { Component, Input, ViewChild } from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-solution-carousel',
  templateUrl: './solution-carousel.component.html',
  styleUrls: ['./solution-carousel.component.scss'],
})
export class SolutionCarouselComponent {
  contactRoute = Config.impactivRoutes.contact;
  @ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;

  @Input() title!: string;
  @Input() description!: string;
  @Input() images!: { src: string; alt: string }[];
  @Input() maxView!: number;

  currentStep = 0;

  selectPage(isNext: boolean): void {
    this.ngxGlide.go(isNext ? '>' : '<');
  }

  onRanAfter(): void {
    this.currentStep = this.ngxGlide.getIndex();
  }
}
