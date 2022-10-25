import { Component, OnInit } from '@angular/core';
import { UseCase } from 'src/app/interfaces';
import { UseCaseService } from 'src/app/services';
import { impactivRoutes } from 'src/app/services/config';

@Component({
  selector: 'impactiv-use-case-resume',
  templateUrl: './use-case-resume.component.html',
  styleUrls: ['./use-case-resume.component.scss'],
})
export class UseCaseResumeComponent implements OnInit {
  constructor(private useCaseService: UseCaseService) {}
  currentUseCase: null | UseCase = null;
  useCases: UseCase[] = [];
  useCaseButtons: { name: string; slug: string }[] = [];
  sliceUseCase = 4;
  isVideo = false;
  routes = impactivRoutes;
  async ngOnInit(): Promise<void> {
    this.useCases = await this.useCaseService.getUseCases();
    this.useCaseButtons = await this.useCaseService.getUseCasesName();
    this.currentUseCase = this.useCases[0];
    this.verifyIsVideo();
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
}
