import { Location } from '@angular/common';
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
  useCasesSubscription!: Subscription;

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.useCasesSubscription = this.useCaseService
          .getUseCases$()
          .subscribe((response) => {
            this.useCase =
              response.filter(
                (usecase) => usecase.slug === params.get('slug') ?? ''
              )[0] ?? null;
            if (!this.useCase) this.router.navigate([impactivRoutes.notFound]);
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
          });
      }
    );
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
    this.useCasesSubscription.unsubscribe();
  }
}
