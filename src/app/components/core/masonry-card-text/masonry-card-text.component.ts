import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'impactiv-masonry-card-text',
  templateUrl: './masonry-card-text.component.html',
  styleUrls: ['./masonry-card-text.component.scss']
})
export class MasonryCardTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() card!: {
    icon?: string;
    title: string;
    description: string;
    black: boolean;
  };
}
