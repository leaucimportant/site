import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibsModule } from '../../libs-external/libs.module';

import { ChallengeComponent } from './challenge/challenge.component';
import { CustomerNeedComponent } from './customer-need/customer-need.component';
import { ResponseComponent } from './response/response.component';
import { UseCaseHeroComponent } from './use-case-hero/use-case-hero.component';

const useCaseComponentsExports = [
  UseCaseHeroComponent,
  CustomerNeedComponent,
  ResponseComponent,
  ChallengeComponent,
];

@NgModule({
  imports: [CommonModule, LibsModule],
  declarations: [...useCaseComponentsExports],
  exports: [...useCaseComponentsExports],
})
export class UseCaseLibModule {}
