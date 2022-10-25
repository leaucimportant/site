import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UseCase } from 'src/app/interfaces';
import {
  Config,
  MatomoService,
  OgMeta,
  SeoService,
  UseCaseService,
} from 'src/app/services';
import { impactivRoutes } from 'src/app/services/config';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';

@Component({
  selector: 'impactiv-use-case',
  templateUrl: './use-case.component.html',
  styleUrls: ['./use-case.component.scss'],
})
export class UseCaseComponent implements OnInit, OnDestroy {
  constructor(
    private useCaseService: UseCaseService,
    private route: ActivatedRoute,
    private router: Router,
    private seoService: SeoService,
    private matomoService: MatomoService
  ) {}

  routeSubscription!: Subscription;
  useCase: UseCase | null = null;

  banner = {
    title: 'Votre expérience commence ici !',
    description:
      'Pour simplement échanger sur votre projet ou avoir une démonstration de nos solutions, nos équipes se tiennent à votre disposition.',
    parallax: true,
  };

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(
      async (params: ParamMap) => {
        this.useCase = await this.useCaseService.getUseCase(
          params.get('slug') ?? ''
        );
        // A confirmer ce comportement
        if (!this.useCase) this.router.navigate([impactivRoutes.home]);
        else {
          const configSeo: Required<OgMeta> = {
            description: this.useCase.seo.description,
            image: this.useCase.seo.image,
            title: this.useCase.seo.title,
            type: 'website',
            url: Location.joinWithSlash(
              environment.siteUri,
              `${Config.impactivRoutes.useCase}/${this.useCase.slug}`
            ),
          };
          this.seoService.setPageSeo(configSeo);
          this.matomoService.trackPageView(configSeo);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
