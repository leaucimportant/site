import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UseCase } from 'src/app/interfaces';
import { UseCaseService } from 'src/app/services';
import { impactivRoutes } from 'src/app/services/config';

@Component({
  selector: 'impactiv-use-case-resume',
  templateUrl: './use-case-resume.component.html',
  styleUrls: ['./use-case-resume.component.scss'],
})
export class UseCaseResumeComponent implements OnChanges {
  constructor(private useCaseService: UseCaseService) {}
  @Input() currentSolution!: string;
  currentUseCase: null | UseCase = null;
  useCases: UseCase[] = [];
  useCaseButtons: { name: string; slug: string }[] = [];
  sliceUseCase = 4;
  isVideo = false;
  routes = impactivRoutes;

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (changes['currentSolution']) {
      if (!this.useCases.length)
        this.useCases = await this.useCaseService.getUseCases();
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
    }
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
