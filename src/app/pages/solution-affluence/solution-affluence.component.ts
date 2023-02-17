import { Component, OnInit } from '@angular/core';
import { Config, MatomoService, SeoService } from 'src/app/services';

@Component({
  selector: 'impactiv-solution-affluence',
  templateUrl: './solution-affluence.component.html',
  styleUrls: ['./solution-affluence.component.scss'],
})
export class SolutionAffluenceComponent implements OnInit {
  constructor(
    private seoService: SeoService,
    private matomoService: MatomoService
  ) {}
  solution = Config.impactivSolutions.affluence;

  titleCarousel = 'A chaque usage, une solution IoT sur mesure.';
  descriptionCarousel =
    'Parce que vos besoins métier sont uniques, nous déployons des solutions de gestion d’affluence orientées expérience utilisateur et excellence opérationnelle.';

  imagesCarousel = [
    {
      src: 'assets/images/contents/solutions/affluence/building.png',
      alt: 'Affluence - Building',
    },
    {
      src: 'assets/images/contents/solutions/affluence/cafet.png',
      alt: 'Affluence - Cafeteria',
    },
    {
      src: 'assets/images/contents/solutions/affluence/office.png',
      alt: 'Affluence - Office',
    },
    {
      src: 'assets/images/contents/solutions/affluence/shop.png',
      alt: 'Affluence - Shop',
    },
  ];

  data = {
    title: $localize`:Text|title affluence grid@@AFFLUENCE-GRID-TITLE:`,
    description: $localize`:Text|affluence description grid@@CARD-DESCRIPTION-DIGITAL-DESCRIPTION:`,
    items: [
      {
        image: 'rgpd.gif',
        subtitle: $localize`:Text|subtitle affluence grid@@AFFLUENCE-GRID-RGPD:`,
        icon: 'lock.png',
      },
      {
        image: 'fiabilite.png',
        subtitle: $localize`:Text|subtitle affluence grid@@AFFLUENCE-GRID-RELIABILITY:`,
        icon: 'graph.png',
      },
      {
        image: 'capteur.png',
        subtitle: $localize`:Text|subtitle affluence grid@@AFFLUENCE-GRID-SENSOR:`,
        icon: 'camera.png',
      },
      {
        image: 'installation.png',
        subtitle: $localize`:Text|subtitle affluence grid@@AFFLUENCE-GRID-INSTALLATION:`,
        icon: 'visibility.png',
      },
      {
        image: 'donnees.png',
        subtitle: $localize`:Text|subtitle affluence grid@@AFFLUENCE-GRID-FAST:`,
        icon: 'schedule.png',
      },
      {
        image: 'lorawan.png',
        subtitle: $localize`:Text|subtitle affluence grid@@AFFLUENCE-GRID-POE:`,
        icon: 'podcasts.png',
      },
      {
        image: 'passage.png',
        subtitle: $localize`:Text|subtitle affluence grid@@AFFLUENCE-GRID-TRANSIT:`,
        icon: 'people.png',
      },
      {
        image: 'sombre.png',
        subtitle: $localize`:Text|subtitle affluence grid@@AFFLUENCE-GRID-GLOOMY:`,
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
        image: 'ux.png',
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
        image: 'plug.png',
        subtitle: 'Plug and Play',
        icon: 'electrical.png',
      },
      {
        image: 'cost.png',
        subtitle: 'Maîtrise des coûts',
        icon: 'credit.png',
      },
      {
        image: 'visit.png',
        subtitle: 'Limiter le nombre de visiteurs',
        icon: 'person.png',
      },
      {
        image: 'passage.png',
        subtitle: 'Métriques consultables multi-supports',
        icon: 'devices.png',
      },
      {
        image: 'graph.png',
        subtitle: 'Graphiques temps réel',
        icon: 'chart.png',
      },
    ],
  };
  ngOnInit(): void {
    this.setSeo();
    this.matomoTrack();
  }
  private setSeo(): void {
    if (Config.seoMeta.affluenceSolution) {
      this.seoService.setPageSeo(Config.seoMeta.affluenceSolution);
    } else {
      console.warn('missing seoMeta.affluenceSolution');
    }
  }

  private matomoTrack(): void {
    if (Config.seoMeta.affluenceSolution) {
      this.matomoService.trackPageView(Config.seoMeta.affluenceSolution);
    } else {
      console.warn('missing seoMeta.affluenceSolution');
    }
  }
}
