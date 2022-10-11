import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';

@Component({
  selector: 'impactiv-our-expertise',
  templateUrl: './our-expertise.component.html',
  styleUrls: ['./our-expertise.component.scss'],
})
export class OurExpertiseComponent implements OnInit {
  @ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;

  expertises = [
    {
      title: 'La conception de l’expérience utilisateur. 1',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
      image: 'affluence.png',
      alt: 'alt',
    },
    {
      title: 'Designer avec un objectif en tête. 2',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],

      image: 'affluence.png',
      alt: 'alt',
    },
    {
      title: 'Designer avec un objectif en tête. 3',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],

      image: 'affluence.png',
      alt: 'alt',
    },
    {
      title: 'Designer avec un objectif en tête. 4',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],

      image: 'affluence.png',
      alt: 'alt',
    },
    {
      title: 'Designer avec un objectif en tête. 5',
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],

      image: 'affluence.png',
      alt: 'alt',
    },
  ];

  currentStep = 0;

  ngOnInit(): void {}

  selectPage(isNext: boolean): void {
    this.ngxGlide.go(isNext ? '>' : '<');
  }

  onRanAfter(): void {
    this.currentStep = this.ngxGlide.getIndex();
  }
}
