import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'impactiv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  banner = {
    title: 'Votre expérience commence ici !',
    description:
      'Pour simplement échanger sur votre projet ou avoir une démonstration de nos solutions, nos équipes se tiennent à votre disposition.',
  };

  constructor() {}

  ngOnInit(): void {}
}
