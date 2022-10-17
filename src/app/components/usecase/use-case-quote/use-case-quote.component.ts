import { Component, Input, OnInit } from '@angular/core';
import { Block } from 'src/app/interfaces';

@Component({
  selector: 'impactiv-use-case-quote',
  templateUrl: './use-case-quote.component.html',
  styleUrls: ['./use-case-quote.component.scss'],
})
export class UseCaseQuoteComponent implements OnInit {
  constructor() {}

  @Input() quote!: Block;

  ngOnInit(): void {}
}
