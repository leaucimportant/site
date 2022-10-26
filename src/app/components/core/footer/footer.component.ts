import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Config, UseCaseService } from 'src/app/services';

@Component({
  selector: 'impactiv-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  constructor(private useCaseService: UseCaseService) {}

  readonly routes = Config.impactivRoutes;
  year = new Date().getFullYear();

  phone = '';
  phoneAreaCode = '+339';
  phoneStart = '5333';
  phoneEnd = '0360';
  useCases: { name: string; slug: string }[] = [];
  useCasesSubscription!: Subscription;

  setPhone() {
    return {
      phoneAreaCode: '+33 9',
      phoneStart: ' 53 33',
      phoneEnd: ' 03 60',
    };
  }

  ngOnInit(): void {
    this.useCasesSubscription = this.useCaseService
      .getUseCases$()
      .subscribe((response) => {
        this.useCases = response
          .sort((a, b) => (a.rank > b.rank ? 1 : -1))
          .map((useCase) => ({
            name: useCase.name,
            slug: useCase.slug,
          }));
      });
  }

  ngOnDestroy(): void {
    this.useCasesSubscription.unsubscribe();
  }
}
