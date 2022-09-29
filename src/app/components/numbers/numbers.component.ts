import { Component, Input } from '@angular/core';

@Component({
  selector: 'impactiv-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent {
  constructor() {}

  @Input() numbers!: { data: string; title: string; description: string }[];
}
