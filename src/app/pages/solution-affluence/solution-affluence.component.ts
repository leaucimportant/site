import { Component } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-solution-affluence',
  templateUrl: './solution-affluence.component.html',
  styleUrls: ['./solution-affluence.component.scss'],
})
export class SolutionAffluenceComponent {
  solution = Config.impactivSolutions.affluence;

  titleCarousel = 'A chaque usage, une solution IoT sur mesure.';
  descriptionCarousel =
    'Parce que vos besoins métier sont uniques, nous déployons des solutions de gestion d’affluence orientées expérience utilisateur et excellence opérationnelle.';

  imagesCarousel = [
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

  data = {
    title: 'Une solution de comptage et d’analyse de vos flux.',
    description:
      'Mesurez le nombre de personnes entrantes et/ou sortantes de tout type d’espace tout en protégeant l’anonymat des passants avec une précision sans pareil grâce à l’utilisation de la technologie Time-of-flight. ',
    items: [
      {
        image: 'capteur.png',
        subtitle: 'Respect de la vie privée (RGPD)',
        icon: 'lock.png',
      },
      {
        image: 'installation.png',
        subtitle: 'Fiabilité à 98+%',
        icon: 'graph.png',
      },
      {
        image: 'capteur.png',
        subtitle: 'Capteur 3D ToF',
        icon: 'camera.png',
      },
      {
        image: 'installation.png',
        subtitle: 'Installation simple et discrète',
        icon: 'visibility.png',
      },
      {
        image: 'donnees.png',
        subtitle: 'Données en temps réel',
        icon: 'schedule.png',
      },
      {
        image: 'lorawan.png',
        subtitle: 'PoE ou LoRaWAN',
        icon: 'podcasts.png',
      },
      {
        image: 'passage.png',
        subtitle: 'Gestion des passages en groupe',
        icon: 'people.png',
      },
      {
        image: 'sombre.png',
        subtitle: 'Efficace y compris dans des environnements peu lumineux',
        icon: 'brightness.png',
      },
    ],
  };

  dataprocess = {
    title: 'Améliorez vos process et la satisfaction client !',
    description:
      'Ces données sont retraitées via notre infrastructure Cloud et vous sont accessibles au travers d’une API ou d’une interface dédiée (orientée clients et/ou opérationnels). Elles vous permettront ainsi d’adapter votre stratégie selon la fréquentation et vos objectifs commerciaux au sein de votre établissement.',
    items: [
      {
        image: 'capteur.png',
        subtitle: 'Améliorez l’expérience utilisateur',
        icon: 'account.png',
      },
      {
        image: 'installation.png',
        subtitle: 'De nombreuses applications',
        icon: 'widgets.png',
      },
      {
        image: 'capteur.png',
        subtitle: 'Analysez le flux',
        icon: 'stats.png',
      },
      {
        image: 'installation.png',
        subtitle: 'Plug and Play',
        icon: 'electrical.png',
      },
      {
        image: 'passage.png',
        subtitle: 'Maîtrise des coûts',
        icon: 'credit.png',
      },
      {
        image: 'sombre.png',
        subtitle: 'Limiter le nombre de visiteurs',
        icon: 'person.png',
      },
      {
        image: 'passage.png',
        subtitle: 'Métriques consultables multi-supports',
        icon: 'devices.png',
      },
      {
        image: 'sombre.png',
        subtitle: 'Graphiques temps réel',
        icon: 'chart.png',
      },
    ],
  };
}
