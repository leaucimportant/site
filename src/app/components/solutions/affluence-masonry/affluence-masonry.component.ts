import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-affluence-masonry',
  templateUrl: './affluence-masonry.component.html',
  styleUrls: ['./affluence-masonry.component.scss'],
})
export class AffluenceMasonryComponent implements OnInit {
  isActive: boolean = false;

  readonly routes = Config.impactivRoutes;

  constructor() {}

  ngOnInit(): void {}

  card1 = {
    title: 'Améliorez l’expérience utilisateur',
    description:
      'Fluidifiez l’affluence de votre point de vente, vecteur de satisfaction client.',
    icon: 'assets/images/icons/affluence/ux.svg',
    image: 'assets/images/contents/solutions/affluence/masonry/ux.png',
    black: true,
    imagefill: false,
    imageright: false,
    imagetop: false,
  };

  card2 = {
    title: 'Métriques consultables multi-supports',
    description:
      'Notre solution est livrée avec un back-office simple et intuitif qui vous donne un état des lieux en temps réel de l’affluence de votre point de vente ainsi qu’une API à votre disposition.',
    icon: 'assets/images/icons/affluence/multi.svg',
    black: false,
  };

  card3 = {
    title: 'Analysez le flux',
    description:
      'Véritable outil de performance, nos capteurs vous permettront d’avoir une meilleure connaissance de vos clients et de leur parcours. Adaptez votre offre/merchandising en conséquence !',
    icon: 'assets/images/icons/affluence/analyse.svg',
    image: 'assets/images/contents/solutions/affluence/masonry/flux.png',
    black: false,
    imagefill: true,
    imageright: false,
    imagetop: true,
  };

  card4 = {
    title: 'Graphiques temps réel',
    description:
      'Vos clients disposent d’un accès aux données d’affluence, consultable via un simple lien web ou intégré sur votre site/application native client.',
    icon: 'assets/images/icons/affluence/graphique.svg',
    image: 'assets/images/contents/solutions/affluence/masonry/graphique.png',
    black: false,
    imagefill: false,
    imageright: false,
    imagetop: true,
  };

  card5 = {
    title: 'De nombreuses applications',
    description:
      'Nos capteurs permettent non seulement de mesurer l’affluence de vos clients mais peuvent s’appliquer à d’autres cas d’usage (mesure de stocks avec réapprovisionnement automatique,…).',
    icon: 'assets/images/icons/affluence/applications.svg',
    image: 'assets/images/contents/solutions/affluence/masonry/applications.png',
    black: true,
    imagefill: false,
    imageright: false,
    imagetop: false,
  };

  card6 = {
    title: 'Limiter le nombre de visiteurs',
    description:
      'Vous pouvez, sur la base des données remontées en temps réel, limiter l’accès à votre point de vente en fonction du flux de clients.',
    icon: 'assets/images/icons/affluence/limiter.svg',
    black: true,
  };

  card7 = {
    title: 'Plug and Play',
    description:
      'Nos capteurs partent configurés pour votre environnement, vous n’avez plus qu’à les brancher aux prérequis techniques indiqués en amont.',
    icon: 'assets/images/icons/affluence/plug.svg',
    image: 'assets/images/contents/solutions/affluence/masonry/plug.png',
    black: false,
    imagefill: false,
    imageright: true,
    imagetop: false,
  };
}
