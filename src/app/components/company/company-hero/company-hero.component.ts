import { Component } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-company-hero',
  templateUrl: './company-hero.component.html',
  styleUrls: ['./company-hero.component.scss'],
})
export class CompanyHeroComponent {
  readonly routes = Config.impactivRoutes;

  company = [
    {
      url: 'assets/images/contents/company/arnaud.png',
      alt: 'Arnaud',
    },
    {
      url: 'assets/images/contents/company/charles.png',
      alt: 'Charles',
    },
    {
      url: 'assets/images/contents/company/rachelle.png',
      alt: 'Rachelle',
    },
    {
      url: 'assets/images/contents/company/gerard.png',
      alt: 'Gerard',
    },
    {
      url: 'assets/images/contents/company/melanie.png',
      alt: 'Melanie',
    },
    {
      url: 'assets/images/contents/company/kevin.png',
      alt: 'Kevin',
    },
    {
      url: 'assets/images/contents/company/lea.png',
      alt: 'Lea',
    },
    {
      url: 'assets/images/contents/company/jean.png',
      alt: 'Jean',
    },
    {
      url: 'assets/images/contents/company/michel.png',
      alt: 'Michel',
    },
    {
      url: 'assets/images/contents/company/micheline.png',
      alt: 'Micheline',
    },
    {
      url: 'assets/images/contents/company/olivier.png',
      alt: 'Olivier',
    },
    {
      url: 'assets/images/contents/company/david.png',
      alt: 'David',
    },
    {
      url: 'assets/images/contents/company/sophie.png',
      alt: 'Sophie',
    },
    {
      url: 'assets/images/contents/company/thomas.png',
      alt: 'Thomas',
    },
    {
      url: 'assets/images/contents/company/william.png',
      alt: 'William',
    },
    {
      url: 'assets/images/contents/company/albert.png',
      alt: 'Albert',
    },
    {
      url: 'assets/images/contents/company/julie.png',
      alt: 'Julie',
    },
    {
      url: 'assets/images/contents/company/wouf.png',
      alt: 'Wouf',
    },
    {
      url: 'assets/images/contents/company/xavier.png',
      alt: 'Xavier',
    },
  ];
}
