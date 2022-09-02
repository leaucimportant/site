import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'impactiv-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],
})
export class ComingSoonComponent implements OnInit {
  email = '';

  name = 'bonjour';
  domain = 'impactiv.fr';

  constructor() {}

  ngOnInit(): void {}
}
