import { Component, Input } from '@angular/core';

@Component({
  selector: 'impactiv-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent {
  @Input() text!: string;
  @Input() author!: {
    name?: string;
    job: string;
  };
  @Input() image!: string;
}
