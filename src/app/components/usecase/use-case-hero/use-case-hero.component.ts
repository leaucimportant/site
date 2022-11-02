import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'impactiv-use-case-hero',
  templateUrl: './use-case-hero.component.html',
  styleUrls: ['./use-case-hero.component.scss'],
})
export class UseCaseHeroComponent implements OnInit {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() logo!: string;
  @Input() media!: string;
  @Input() tags!: string[];

  isVideo = false;

  ngOnInit(): void {}

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['media'] && this.media)
      this.isVideo = this.media.split('.').pop() === 'mp4';
  }
}
