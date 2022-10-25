import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-solution-carousel',
  templateUrl: './solution-carousel.component.html',
  styleUrls: ['./solution-carousel.component.scss'],
})
export class SolutionCarouselComponent {
  contactRoute = Config.impactivRoutes.contact;

  images = [
    {
      src: 'assets/images/contents/solutions/webapp/dashboard_web_app.jpg',
      alt: 'Dashboard Application Collaborateurs',
    },
    {
      src: 'assets/images/contents/solutions/webapp/list_articles.png',
      alt: "Liste d'articles",
    },
    {
      src: 'assets/images/contents/solutions/webapp/screen_table_reservation.png',
      alt: 'Formulaire réservation de table',
    },
  ];
}
