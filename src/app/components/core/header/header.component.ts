import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Config, HeaderService, UseCaseService } from 'src/app/services';
import { impactivRoutes } from 'src/app/services/config';

@Component({
  selector: 'impactiv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private useCaseService: UseCaseService,
    @Inject(DOCUMENT) private document: Document,
    private window: Window,
    private headerService: HeaderService
  ) {}
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
      description: 'Créer des applications dédiées pour le web.',
      icon: 'affichage.svg',
      alt: 'affichage',
      route: impactivRoutes.webAppSolution,
    },
    {
      title: 'Mesure d’affluence',
      description: 'Mesurer l’affluence en temps-réel.',
      icon: 'affluence.svg',
      alt: 'affluence',
      route: impactivRoutes.affluenceSolution,
    },
    {
      title: 'Développement sur-mesure',
      description: 'Créer des outils métier à forte valeur ajoutée.',
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
  prevScrollPos = this.window.scrollY;
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

  @HostListener('window:scroll', [])
  headerScroll() {
    const navbar = this.document.getElementById('navbar');
    const currentScrollPos = this.window.scrollY;
    if (navbar) {
      if (this.window.innerWidth >= 1140) {
        if (this.prevScrollPos > currentScrollPos) {
          navbar.style.top = '0';
          navbar.classList.add('blur');
        } else {
          navbar.style.top = '-5.75rem';
          navbar.classList.remove('blur');
        }
      } else {
        navbar.classList.add('blur');
      }
      if (navbar.offsetHeight - 50 > currentScrollPos) {
        navbar.classList.remove('blur');
      }
    }
    this.prevScrollPos = currentScrollPos;
  }

  deactivateScroll() {
    this.headerService.deactivateScroll();
  }
}
