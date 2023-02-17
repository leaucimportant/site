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
    title: $localize`:Text|card title@@AFFLUENCE-MASONRY-UX-TITLE:`,
    description: $localize`:Text|card description@@AFFLUENCE-MASONRY-UX-DESCRIPTION:`,
    icon: 'assets/images/icons/affluence/ux.svg',
    image: 'assets/images/contents/solutions/affluence/masonry/ux.png',
    black: true,
    imagefill: false,
    imageright: false,
    imagetop: false,
  };

  card2 = {
    title: $localize`:Text|card title@@AFFLUENCE-MASONRY-SUPPORT-TITLE:`,
    description: $localize`:Text|card description@@AFFLUENCE-MASONRY-SUPPORT-DESCRIPTION:`,
    icon: 'assets/images/icons/affluence/multi.svg',
    black: false,
  };

  card3 = {
    title: $localize`:Text|card title@@AFFLUENCE-MASONRY-FLUX-TITLE:`,
    description: $localize`:Text|card description@@AFFLUENCE-MASONRY-FLUX-DESCRIPTION:`,
    icon: 'assets/images/icons/affluence/analyse.svg',
    image: 'assets/images/contents/solutions/affluence/masonry/flux.png',
    black: false,
    imagefill: true,
    imageright: false,
    imagetop: true,
  };

  card4 = {
    title: $localize`:Text|card title@@AFFLUENCE-MASONRY-GRAPH-TITLE:`,
    description: $localize`:Text|card description@@AFFLUENCE-MASONRY-GRAPH-DESCRIPTION:`,
    icon: 'assets/images/icons/affluence/graphique.svg',
    image: 'assets/images/contents/solutions/affluence/masonry/graphique.png',
    black: false,
    imagefill: false,
    imageright: false,
    imagetop: true,
  };

  card5 = {
    title: $localize`:Text|card title@@AFFLUENCE-MASONRY-APPS-TITLE:`,
    description: $localize`:Text|card description@@AFFLUENCE-MASONRY-APPS-DESCRIPTION:`,
    icon: 'assets/images/icons/affluence/applications.svg',
    image:
      'assets/images/contents/solutions/affluence/masonry/applications.png',
    black: true,
    imagefill: false,
    imageright: false,
    imagetop: false,
  };

  card6 = {
    title: $localize`:Text|card title@@AFFLUENCE-MASONRY-PEOPLE-TITLE:`,
    description: $localize`:Text|card description@@AFFLUENCE-MASONRY-PEOPLE-DESCRIPTION:`,
    icon: 'assets/images/icons/affluence/limiter.svg',
    black: true,
  };

  card7 = {
    title: $localize`:Text|card title@@AFFLUENCE-MASONRY-PLUG-PLAY-TITLE:`,
    description: $localize`:Text|card description@@AFFLUENCE-MASONRY-PLUG-PLAY-DESCRIPTION:`,
    icon: 'assets/images/icons/affluence/plug.svg',
    image: 'assets/images/contents/solutions/affluence/masonry/plug.png',
    black: false,
    imagefill: false,
    imageright: true,
    imagetop: false,
  };
}
