import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'impactiv-masonry-card-image',
  templateUrl: './masonry-card-image.component.html',
  styleUrls: ['./masonry-card-image.component.scss']
})
export class MasonryCardImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() card!: {
    icon?: string;
    image?: string;
    title: string;
    description: string;
    black: boolean;
    imagefill: boolean;
    imageright: boolean;
    imagetop: boolean
  };
}
