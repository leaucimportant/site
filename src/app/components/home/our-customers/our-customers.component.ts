import { Component } from '@angular/core';

@Component({
  selector: 'impactiv-our-customers',
  templateUrl: './our-customers.component.html',
  styleUrls: ['./our-customers.component.scss'],
})
export class OurCustomersComponent {
  customers = [
    {
      url: 'assets/images/contents/customers/ca.png',
      alt: 'Crédit Agricole',
    },
    {
      url: 'assets/images/contents/customers/cbre.png',
      alt: 'CBRE',
    },
    {
      url: 'assets/images/contents/customers/cea.png',
      alt: 'CEA',
    },
    {
      url: 'assets/images/contents/customers/constructa.png',
      alt: 'Constructa',
    },
    {
      url: 'assets/images/contents/customers/dupont.png',
      alt: 'Dupont Restauration',
    },
    {
      url: 'assets/images/contents/customers/elior.png',
      alt: 'Elior',
    },
    {
      url: 'assets/images/contents/customers/inrae.png',
      alt: 'Inrae',
    },
    {
      url: 'assets/images/contents/customers/la_poste.png',
      alt: 'La poste',
    },
    {
      url: 'assets/images/contents/customers/loreal.png',
      alt: "L'Oreal",
    },
    {
      url: 'assets/images/contents/customers/mcdo.png',
      alt: "McDonald's",
    },
    {
      url: 'assets/images/contents/customers/petitbateau.png',
      alt: 'Petit bateau',
    },
    {
      url: 'assets/images/contents/customers/relais_dor.png',
      alt: "Relai d'or",
    },
    {
      url: 'assets/images/contents/customers/sodexo.png',
      alt: 'Sodexo',
    },
    {
      url: 'assets/images/contents/customers/sport2000.png',
      alt: 'Sport 2000',
    },
  ];
}
