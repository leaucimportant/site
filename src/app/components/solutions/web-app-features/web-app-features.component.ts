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
      title: $localize`:Text|card title@@WEBAPP-FEATURE-RESERVATION-TITLE:`,
      description: $localize`:Text|card description@@WEBAPP-FEATURE-RESERVATION-DESCRIPTION:`,
    },
    {
      image: {
        src: 'webapp/product_card.png',
        alt: 'Consultation de menu',
      },
      title: $localize`:Text|card title@@WEBAPP-FEATURE-MENU-TITLE:`,
      description: $localize`:Text|card description@@WEBAPP-FEATURE-MENU-DESCRIPTION:`,
    },
    {
      image: {
        src: 'webapp/feedback_product.png',
        alt: 'Retour clients',
      },
      title: $localize`:Text|card title@@WEBAPP-FEATURE-FEEDBACK-TITLE:`,
      description: $localize`:Text|card description@@WEBAPP-FEATURE-FEEDBACK-DESCRIPTION:`,
    },
    {
      image: {
        src: 'webapp/article_card.png',
        alt: 'carte article',
      },
      title: $localize`:Text|card title@@WEBAPP-FEATURE-COMMUNICATE-TITLE:`,
      description: $localize`:Text|card description@@WEBAPP-FEATURE-COMMUNICATE-DESCRIPTION:`,
    },
    {
      image: {
        src: 'webapp/affluence_graph.png',
        alt: 'graphique affluence',
      },
      title: $localize`:Text|card title@@WEBAPP-FEATURE-AFFLUENCE-TITLE:`,
      description: $localize`:Text|card description@@WEBAPP-FEATURE-AFFLUENCE-DESCRIPTION:`,
    },
    {
      image: {
        src: 'webapp/online_services.png',
        alt: 'Liens externes',
      },
      title: $localize`:Text|card title@@WEBAPP-FEATURE-LINKS-TITLE:`,
      description: $localize`:Text|card description@@WEBAPP-FEATURE-LINKS-DESCRIPTION:`,
    },
    {
      image: {
        src: 'webapp/selector_restaurants.png',
        alt: 'Sélecteur point de ventes',
      },
      title: $localize`:Text|card title@@WEBAPP-FEATURE-SALES-TITLE:`,
      description: $localize`:Text|card description@@WEBAPP-FEATURE-SALES-DESCRIPTION:`,
    },
    {
      image: {
        src: 'webapp/responsive.png',
        alt: 'Multi-supports',
      },
      title: $localize`:Text|card title@@WEBAPP-FEATURE-RESPONSIVE-TITLE:`,
      description: $localize`:Text|card description@@WEBAPP-FEATURE-RESPONSIVE-DESCRIPTION:`,
    },
  ];
}
