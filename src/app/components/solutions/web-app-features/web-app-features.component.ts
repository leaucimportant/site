import { Component } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-web-app-features',
  templateUrl: './web-app-features.component.html',
  styleUrls: ['./web-app-features.component.scss'],
})
export class WebAppFeaturesComponent {
  contactRoute = Config.impactivRoutes.contact;
  solutions = [
    {
      image: {
        src: 'webapp/table_reservation.png',
        alt: 'Réservation de table',
      },
      title: 'Réservation de table',
      description:
        'La solution qui facilite le quotidien de vos clients et de vos gérant(e)s.',
    },
    {
      image: {
        src: 'webapp/product_card.png',
        alt: 'Consultation de menu',
      },
      title: 'Consultation de menu',
      description:
        'Communiquez vos menus en temps réel, des photos aux allergènes.',
    },
    {
      image: {
        src: 'webapp/feedback_product.png',
        alt: 'Retour clients',
      },
      title: 'Feedback clients',
      description:
        'Agrégez les avis de vos clients et atteignez l’excellence !',
    },
    {
      image: {
        src: 'webapp/article_card.png',
        alt: 'carte article',
      },
      title: 'Communications et évenements',
      description:
        'Communiquez efficacement avec vos clients, localement et/ou centralement.',
    },
    {
      image: {
        src: 'webapp/affluence_graph.png',
        alt: 'graphique affluence',
      },
      title: 'Affluence en temps réel',
      description:
        'Un outil au service de vos décisions stratégiques résolument orienté client.',
    },
    {
      image: {
        src: 'webapp/online_services.png',
        alt: 'Liens externes',
      },
      title: 'Liens externes',
      description:
        'Intégrez en un clic tout ou partie de vos services externes.',
    },
    {
      image: {
        src: 'webapp/selector_restaurants.png',
        alt: 'Sélecteur point de ventes',
      },
      title: 'Multi-points de ventes',
      description:
        'Pilotez l’ensemble de vos restaurants au sein d’un seul et même outil.',
    },
    {
      image: {
        src: 'webapp/responsive.png',
        alt: 'Multi-supports',
      },
      title: 'Multi-supports',
      description: '... le service privilégié en mobilité comme au bureau.',
    },
  ];
}
