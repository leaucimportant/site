import { Component, Input, OnInit } from '@angular/core';
import { Block } from 'src/app/interfaces';

@Component({
  selector: 'impactiv-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss'],
})
export class ResponseComponent implements OnInit {
  constructor() {}

  @Input() response!: Block;

  ngOnInit(): void {}
}
