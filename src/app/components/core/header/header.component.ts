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
      title: $localize`:Text|title solution header@@DIGITAL-SIGNAGE:`,
      description: $localize`:Text|description solution header@@DIGITAL-SIGNAGE-SHORT-DESCRIPTION:`,
      icon: 'rectangle.svg',
      alt: 'rectangle',
      route: impactivRoutes.screenSolution,
    },
    {
      title: $localize`:Text|title solution header@@WEB-APP:`,
      description: $localize`:Text|description solution header@@WEB-APP-SHORT-DESCRIPTION:`,
      icon: 'app.svg',
      alt: 'app',
      route: impactivRoutes.webAppSolution,
    },
    {
      title: $localize`:Text|title solution header@@AFFLUENCE:`,
      description: $localize`:Text|description solution header@@AFFLUENCE-SHORT-DESCRIPTION:`,
      icon: 'affluence.png',
      alt: 'affluence',
      route: impactivRoutes.affluenceSolution,
    },
    {
      title: $localize`:Text|title solution header@@SPECIFIC-DEVELOPMENT:`,
      description: $localize`:Text|description solution header@@SPECIFIC-DEVELOPMENT-SHORT-DESCRIPTION:`,
      icon: 'integration.svg',
      alt: 'integration',
      route: impactivRoutes.dsmSolution,
    },
  ];
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
