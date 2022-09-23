import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'impactiv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  year = new Date().getFullYear();

  ngOnInit(): void {}
}
