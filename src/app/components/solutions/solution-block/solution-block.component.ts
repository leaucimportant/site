import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'impactiv-solution-block',
  templateUrl: './solution-block.component.html',
  styleUrls: ['./solution-block.component.scss'],
})
export class SolutionBlockComponent implements OnInit {
  @Input() isReversed!: boolean;

  @Input() data!: {
    title: string;
    description: string;
    image: { src: string; alt: string };
  };

  constructor() {}

  ngOnInit(): void {}
}
