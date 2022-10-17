import { Component, Input, OnInit } from '@angular/core';
import { Block } from 'src/app/interfaces';

@Component({
  selector: 'impactiv-customer-need',
  templateUrl: './customer-need.component.html',
  styleUrls: ['./customer-need.component.scss'],
})
export class CustomerNeedComponent implements OnInit {
  constructor() {}

  @Input() customerNeed!: Block;

  ngOnInit(): void {}
}
