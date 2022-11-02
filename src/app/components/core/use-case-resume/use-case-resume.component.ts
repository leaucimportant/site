import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { UseCase } from 'src/app/interfaces';
import { UseCaseService } from 'src/app/services';
import { impactivRoutes } from 'src/app/services/config';

@Component({
  selector: 'impactiv-use-case-resume',
  templateUrl: './use-case-resume.component.html',
  styleUrls: ['./use-case-resume.component.scss'],
})
export class UseCaseResumeComponent implements OnChanges, OnDestroy {
  constructor(private useCaseService: UseCaseService) {}
  @Input() currentSolution!: string;
  currentUseCase: null | UseCase = null;
  useCases: UseCase[] = [];
  useCaseButtons: { name: string; slug: string }[] = [];
  sliceUseCase = 4;
  isVideo = false;
  routes = impactivRoutes;
  useCasesSubscription!: Subscription;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentSolution']) {
      this.useCasesSubscription = this.useCaseService
        .getUseCases$()
        .subscribe((useCases) => {
          this.useCases = useCases.sort((a, b) => (a.rank > b.rank ? 1 : -1));
          if (this.currentSolution !== '*')
            this.useCases = this.useCases.filter((useCase) =>
              useCase.solutionsFiltered.some(
                (solution) =>
                  solution.toLowerCase() ===
                  this.currentSolution?.toLocaleLowerCase()
              )
            );
          this.setUseCaseName();
          this.currentUseCase = this.useCases[0];
          this.verifyIsVideo();
        });
    }
  }
  ngOnDestroy(): void {
    this.useCasesSubscription.unsubscribe();
  }

  selectUseCase(slug: string) {
    this.currentUseCase = this.useCases.filter(
      (useCase) => useCase.slug === slug
    )[0];
    this.verifyIsVideo();
  }

  verifyIsVideo() {
    this.isVideo =
      this.currentUseCase?.media.split('.').pop() === 'mp4' ?? false;
  }

  setUseCaseName() {
    this.useCaseButtons = this.useCases.map((useCase) => ({
      name: useCase.name,
      slug: useCase.slug,
      logo: useCase.quote.logo,
    }));
  }
}
