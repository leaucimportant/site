import { Component, Input, OnInit } from '@angular/core';
import { Block } from 'src/app/interfaces';

@Component({
  selector: 'impactiv-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss'],
})
export class ChallengeComponent implements OnInit {
  constructor() {}

  @Input() challenge?: Block;

  ngOnInit(): void {}
}
