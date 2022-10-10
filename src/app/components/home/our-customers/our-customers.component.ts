import { Component } from '@angular/core';

@Component({
  selector: 'impactiv-our-customers',
  templateUrl: './our-customers.component.html',
  styleUrls: ['./our-customers.component.scss'],
})
export class OurCustomersComponent {
  customers = [
    {
      url: 'assets/images/contents/customers/logoipsum.svg',
      alt: 'ipsum',
    },
    {
      url: 'assets/images/contents/customers/logoipsum.svg',
      alt: 'ipsum',
    },
    {
      url: 'assets/images/contents/customers/logoipsum.svg',
      alt: 'ipsum',
    },
    {
      url: 'assets/images/contents/customers/logoipsum.svg',
      alt: 'ipsum',
    },
    {
      url: 'assets/images/contents/customers/logoipsum.svg',
      alt: 'ipsum',
    },
  ];
}
