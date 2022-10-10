import { Component, Input } from '@angular/core';

@Component({
  selector: 'impactiv-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent {
  @Input() quote!: {
    logo: string;
    description: string;
    name: string;
    content: string;
    avatar: string;
    job: string;
    number: string;
    alt: string;
  };
}
