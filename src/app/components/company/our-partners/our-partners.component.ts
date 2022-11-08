import { Component } from '@angular/core';

@Component({
  selector: 'impactiv-our-partners',
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.scss'],
})
export class OurPartnersComponent {
  partners = [
    {
      url: 'assets/images/contents/partners/samsung.png',
      alt: 'Samsung',
    },
    {
      url: 'assets/images/contents/partners/azure.png',
      alt: 'Microsoft Azure',
    },
    {
      url: 'assets/images/contents/partners/codit.png',
      alt: 'Codit',
    },
    {
      url: 'assets/images/contents/partners/eiffage.png',
      alt: 'Eiffage Energie Systèmes',
    },
    {
      url: 'assets/images/contents/partners/solum.png',
      alt: 'SoluM',
    },
    {
      url: 'assets/images/contents/partners/innovorder.png',
      alt: 'Innovorder',
    },
    {
      url: 'assets/images/contents/partners/terabee.png',
      alt: 'Terabee',
    },
    {
      url: 'assets/images/contents/partners/gitlab.png',
      alt: 'Gitlab',
    },
  ];
}
