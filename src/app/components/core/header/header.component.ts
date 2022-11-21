import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Config, UseCaseService } from 'src/app/services';
import { impactivRoutes } from 'src/app/services/config';

@Component({
  selector: 'impactiv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private useCaseService: UseCaseService) {}
  routes = Config.impactivRoutes;
  hoveringIndex: null | number = null;
  solutions = [
    {
      title: 'Affichage dynamique',
      description: 'Communiquer efficacement en temps réel.',
      icon: 'rectangle.svg',
      alt: 'rectangle',
      route: impactivRoutes.screenSolution,
    },
    {
      title: 'Application collaborateurs',
      description: 'Créez des applications dédiées pour le web.',
      icon: 'affichage.svg',
      alt: 'affichage',
      route: impactivRoutes.webAppSolution,
    },
    {
      title: 'Mesure d’affluence',
      description: 'Mesurez l’affluence en temps-réel.',
      icon: 'affluence.svg',
      alt: 'affluence',
      route: impactivRoutes.affluenceSolution,
    },
    {
      title: 'Développement sur-mesure',
      description: 'Créez des outils métier à forte valeur ajoutée.',
      icon: 'security.svg',
      alt: 'sécurité',
      route: impactivRoutes.dsmSolution,
    },
  ];
  expertises = [];
  useCases: {
    name: string;
    slug: string;
    headerText: string;
    logo?: string;
  }[] = [];
  useCasesSubscription!: Subscription;

  ngOnInit(): void {
    this.useCasesSubscription = this.useCaseService
      .getUseCases$()
      .subscribe((response) => {
        this.useCases = response
          .sort((a, b) => (a.rank > b.rank ? 1 : -1))
          .map((useCase) => ({
            name: useCase.name,
            slug: useCase.slug,
            headerText: useCase.headerText,
            logo: useCase.quote.logo,
          }));
      });
  }

  ngOnDestroy(): void {
    this.useCasesSubscription.unsubscribe();
  }
}
