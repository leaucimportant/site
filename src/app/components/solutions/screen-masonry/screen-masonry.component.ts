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
    title: $localize`:Text|card title @@SCREEN-MASONRY-CARD-SI-TITLE:`,
    description: $localize`:Text|card description@@SCREEN-MASONRY-CARD-SI-DESCRIPTION:`,
    icon: 'assets/images/icons/screen/si.svg',
    image: 'assets/images/contents/solutions/screen/defaut.png',
    black: false,
    imagefill: false,
    imageright: false,
    imagetop: false,
  };

  card2 = {
    title: $localize`:Text|card title @@SCREEN-MASONRY-CARD-APP-TITLE:`,
    description: $localize`:Text|card description@@SCREEN-MASONRY-CARD-APP-DESCRIPTION:`,
    icon: 'assets/images/icons/screen/applications.svg',
    image: 'assets/images/contents/solutions/screen/app.png',
    black: true,
    imagefill: true,
    imageright: false,
    imagetop: false,
  };

  card3 = {
    title: $localize`:Text|card title @@SCREEN-MASONRY-CARD-BO-TITLE:`,
    description: $localize`:Text|card description@@SCREEN-MASONRY-CARD-BO-DESCRIPTION:`,
    icon: 'assets/images/icons/screen/backoffice.svg',
    image: 'assets/images/contents/solutions/screen/back.png',
    black: false,
    imagefill: true,
    imageright: false,
    imagetop: false,
  };

  card4 = {
    title: $localize`:Text|card title @@SCREEN-MASONRY-CARD-FAST-TITLE:`,
    description: $localize`:Text|card description@@SCREEN-MASONRY-CARD-FAST-DESCRIPTION:`,
    icon: 'assets/images/icons/screen/donnees.svg',
    image: 'assets/images/contents/solutions/screen/temps.png',
    black: true,
    imagefill: false,
    imageright: false,
    imagetop: false,
  };

  card5 = {
    title: $localize`:Text|card title @@SCREEN-MASONRY-CARD-IMFORM-TITLE:`,
    description: $localize`:Text|card description@@SCREEN-MASONRY-CARD-IMFORM-DESCRIPTION:`,
    icon: 'assets/images/icons/screen/informer.svg',
    black: false,
  };

  card6 = {
    title: $localize`:Text|card title @@SCREEN-MASONRY-CARD-UX-TITLE:`,
    description: $localize`:Text|card description@@SCREEN-MASONRY-CARD-UX-DESCRIPTION:`,
    icon: 'assets/images/icons/screen/ux.svg',
    image: 'assets/images/contents/solutions/screen/utilisateur.png',
    black: true,
    imagefill: false,
    imageright: false,
    imagetop: false,
  };

  card7 = {
    title: $localize`:Text|card title @@SCREEN-MASONRY-CARD-IT-TITLE:`,
    description: $localize`:Text|card description@@SCREEN-MASONRY-CARD-IT-DESCRIPTION:`,
    icon: 'assets/images/icons/screen/flux.svg',
    image: 'assets/images/contents/solutions/screen/integrer.png',
    black: false,
    imagefill: true,
    imageright: false,
    imagetop: false,
  };

  card8 = {
    title: $localize`:Text|card title @@SCREEN-MASONRY-CARD-SALE-TITLE:`,
    description: $localize`:Text|card description@@SCREEN-MASONRY-CARD-SALE-DESCRIPTION:`,
    icon: 'assets/images/icons/screen/vente.svg',
    image: 'assets/images/contents/solutions/screen/pdv.png',
    black: true,
    imagefill: false,
    imageright: false,
    imagetop: false,
  };

  card9 = {
    title: $localize`:Text|card title @@SCREEN-MASONRY-CARD-COMMUNICATE-TITLE:`,
    description: $localize`:Text|card description@@SCREEN-MASONRY-CARD-COMMUNICATE-DESCRIPTION:`,
    icon: 'assets/images/icons/screen/communiquer.svg',
    black: false,
  };

  card10 = {
    title: $localize`:Text|card title @@SCREEN-MASONRY-CARD-MANAGEMENT-TITLE:`,
    description: $localize`:Text|card description@@SCREEN-MASONRY-CARD-MANAGEMENT-DESCRIPTION:`,
    icon: 'assets/images/icons/screen/gestion.svg',
    image: 'assets/images/contents/solutions/screen/gestion.png',
    black: false,
    imagefill: true,
    imageright: false,
    imagetop: false,
  };

  card11 = {
    title: $localize`:Text|card title @@SCREEN-MASONRY-CARD-UPGRADE-COMMUNICATE-TITLE:`,
    description: $localize`:Text|card description@@SCREEN-MASONRY-CARD-UPGRADE-COMMUNICATE-DESCRIPTION:`,
    icon: 'assets/images/icons/screen/moderniser.svg',
    black: false,
  };

  card12 = {
    title: $localize`:Text|card title @@SCREEN-MASONRY-CARD-RESPONSIVE-TITLE:`,
    description: $localize`:Text|card description@@SCREEN-MASONRY-CARD-RESPONSIVE-DESCRIPTION:`,
    icon: 'assets/images/icons/screen/formats.svg',
    image: 'assets/images/contents/solutions/screen/format.png',
    black: false,
    imagefill: false,
    imageright: false,
    imagetop: false,
  };
}
