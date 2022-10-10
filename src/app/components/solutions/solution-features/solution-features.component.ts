import { Component } from '@angular/core';

@Component({
  selector: 'impactiv-solution-features',
  templateUrl: './solution-features.component.html',
  styleUrls: ['./solution-features.component.scss'],
})
export class SolutionFeaturesComponent {
  solutions = [
    {
      image: {
        src: 'webapp/product_card.png',
        alt: 'carte produit',
      },
      title: 'Consultation de menu',
      description: 'Communiquer et informer efficacement en temps réel.',
    },
    {
      image: {
        src: 'webapp/product_card.png',
        alt: 'carte produit',
      },
      title: 'Liens externes',
      description:
        "Une solution web qui regroupe l'ensemble des services que vous proposez à vos convives.",
    },
    {
      image: {
        src: 'webapp/product_card.png',
        alt: 'carte produit',
      },
      title: 'Réservation de table',
      description:
        'Évitez les attentes interminables en caisse, réservez directement votre place.',
    },
    {
      image: {
        src: 'webapp/product_card.png',
        alt: 'carte produit',
      },
      title: 'Affluence en temps réel',
      description:
        'Affichez les différentes zones de restauration et faites gagner du temps à vos convives.',
    },
    {
      image: {
        src: 'webapp/product_card.png',
        alt: 'carte produit',
      },
      title: 'Partage d’actualités',
      description:
        'Retrouvez les dernières actualités, les recettes des chefs et bien plus encore...',
    },
    {
      image: {
        src: 'webapp/product_card.png',
        alt: 'carte produit',
      },
      title: 'Récolte d’avis',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus sodales libero magna.',
    },
    {
      image: {
        src: 'webapp/product_card.png',
        alt: 'carte produit',
      },
      title: 'Points de ventes',
      description:
        'Sélectionnez votre restaurant et consultez le menu du jour et/ou de la semaine.',
    },
    {
      image: {
        src: 'webapp/product_card.png',
        alt: 'carte produit',
      },
      title: 'Responsive',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed eget integer enim.',
    },
  ];
}
