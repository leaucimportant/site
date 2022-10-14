import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UseCase } from 'src/app/interfaces';
import { UseCaseService } from 'src/app/services';
import { impactivRoutes } from 'src/app/services/config';

@Component({
  selector: 'impactiv-use-case',
  templateUrl: './use-case.component.html',
  styleUrls: ['./use-case.component.scss'],
})
export class UseCaseComponent implements OnInit, OnDestroy {
  constructor(
    private useCaseService: UseCaseService,
    private route: ActivatedRoute,
    private router: Router
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
          params.get('id') ?? ''
        );
        // A confirmer ce comportement
        if (!this.useCase) this.router.navigate([impactivRoutes.home]);
      }
    );
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
