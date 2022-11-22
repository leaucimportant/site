import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/services';

@Component({
  selector: 'impactiv-screen-masonry',
  templateUrl: './screen-masonry.component.html',
  styleUrls: ['./screen-masonry.component.scss'],
})
export class ScreenMasonryComponent implements OnInit {
  isActive: boolean = false;
  readonly routes = Config.impactivRoutes;

  constructor() {}

  ngOnInit(): void {}

  card1 = {
    title: 'Interfacé à votre SI',
    description:
      'Des solutions interfacées avec votre SI et/ou PIM pour une digitalisation efficiente au service de vos équipe',
    icon: 'assets/images/icons/screen/si.svg',
    image: 'assets/images/contents/solutions/screen/defaut.png',
    black: false,
    imagefill: false,
    imageright: false,
    imagetop: false,
  };

  card2 = {
    title: 'De nombreuses applications',
    description:
      'Proposez vos menus, services et/ou produits à vos clients - à chaque produit son utilisation',
    icon: 'assets/images/icons/screen/applications.svg',
    image: 'assets/images/contents/solutions/screen/defaut_carre.png',
    black: true,
    imagefill: false,
    imageright: false,
    imagetop: false,
  };

  card3 = {
    title: 'Un backoffice simple et performant',
    description:
      'Pour nous, l’expérience de vos clients est toute aussi importante que celle de votre équipe. Pilotez l’ensemble de votre offre et de vos communications depuis un outil simple, performant et intuitif ',
    icon: 'assets/images/icons/screen/backoffice.svg',
    image: 'assets/images/contents/solutions/screen/defaut.png',
    black: false,
    imagefill: false,
    imageright: false,
    imagetop: false,
  };

  card4 = {
    title: 'Des données affichées en temps réel',
    description:
      'Notre réseau de diffusion assure fiabilité et haute disponibilité de vos informations ainsi que des mises à jours en temps réel.',
    icon: 'assets/images/icons/screen/donnees.svg',
    image: 'assets/images/contents/solutions/screen/defaut.png',
    black: true,
    imagefill: false,
    imageright: false,
    imagetop: false,
  };

  card5 = {
    title: 'Informez vos clients',
    description:
      'Bénéficiez de notre socle technologique basé sur le temps réel pour qu’ils bénéficient de vos dernières informations.',
    icon: 'assets/images/icons/screen/informer.svg',
    black: false,
  };

  card6 = {
    title: 'Améliorez l’expérience utilisateur',
    description:
      'Développez votre activité en proposant à vos clients une expérience immersive.',
    icon: 'assets/images/icons/screen/ux.svg',
    image: 'assets/images/contents/solutions/screen/defaut.png',
    black: true,
    imagefill: false,
    imageright: false,
    imagetop: false,
  };

  card7 = {
    title: 'Intégrez n’importe quel flux',
    description:
      'Un socle technologique unique suffisamment flexible pour réaliser des intégrations propres à votre métier',
    icon: 'assets/images/icons/screen/flux.svg',
    image: 'assets/images/contents/solutions/screen/defaut_carre.png',
    black: false,
    imagefill: false,
    imageright: false,
    imagetop: false,
  };

  card8 = {
    title: 'Animez votre point de vente',
    description:
      'Bien plus attractif que le papier, poussez vos communications et vos offres en quelques clics',
    icon: 'assets/images/icons/screen/vente.svg',
    image: 'assets/images/contents/solutions/screen/defaut.png',
    black: false,
    imagefill: false,
    imageright: false,
    imagetop: false,
  };

  card9 = {
    title: 'Communiquez efficacement',
    description:
      'En fonction de la saison ou des heures de la journée, programmez le contenu pertinent au bon moment grâce à notre outil de gestion de playlists.',
    icon: 'assets/images/icons/screen/communiquer.svg',
    black: false,
  };

  card10 = {
    title: 'Modernisez votre communication',
    description:
      'Nos solutions d’affichage dynamique permettent de valoriser votre image de marque et votre communication',
    icon: 'assets/images/icons/screen/moderniser.svg',
    black: false,
  };

  card11 = {
    title: 'Gestion centralisée et/ou locale',
    description:
      'Orientées tous clients, nos solutions favorisent aussi bien l’uniformisation centralisée de vos communications que la créativité propre à chaque point de vente.',
    icon: 'assets/images/icons/screen/gestion.svg',
    image: 'assets/images/contents/solutions/screen/defaut.png',
    black: true,
    imagefill: false,
    imageright: false,
    imagetop: false,
  };

  card12 = {
    title: 'Des formats adaptés selon l’affichage',
    description:
      'Parce que le contenu est la clé, nos solutions d’affichage s’adaptent à vos besoins et votre stratégie —> des étiquettes connectées aux écrans LEDs XXL',
    icon: 'assets/images/icons/screen/formats.svg',
    image: 'assets/images/contents/solutions/screen/defaut_carre.png',
    black: false,
    imagefill: false,
    imageright: false,
    imagetop: false,
  };
}
