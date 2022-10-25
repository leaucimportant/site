import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxGlideModule } from 'ngx-glide';

import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { NumbersComponent } from './core/numbers/numbers.component';
import { BannerComponent } from './core/banner/banner.component';
import { OurCustomersComponent } from './home/our-customers/our-customers.component';
import { OurSolutionsComponent } from './home/our-solutions/our-solutions.component';
import { OurSkillsComponent } from './home/our-skills/our-skills.component';
import { QuoteComponent } from './core/quote/quote.component';
import { WebAppFeaturesComponent } from './solutions/web-app-features/web-app-features.component';
import { HomeHeroComponent } from './home/home-hero/home-hero.component';
import { StatsNumbersComponent } from './core/stats-numbers/stats-numbers.component';
import { SolutionWebAppHeroComponent } from './solutions/web-app-hero/web-app-hero.component';
import { SolutionCarouselComponent } from './solutions/solution-carousel/solution-carousel.component';
import { SolutionBlockComponent } from './solutions/solution-block/solution-block.component';
import { DsmHeroComponent } from './solutions/dsm-hero/dsm-hero.component';
import { OurExpertiseComponent } from './solutions/our-expertise/our-expertise.component';
import { InfrastructureMasonryComponent } from './solutions/infrastructure-masonry/infrastructure-masonry.component';
import { UseCaseResumeComponent } from './core/use-case-resume/use-case-resume.component';
import { OtherSolutionsComponent } from './solutions/other-solutions/other-solutions.component';
import { UseCaseHeroComponent } from './usecase/use-case-hero/use-case-hero.component';
import { CustomerNeedComponent } from './usecase/customer-need/customer-need.component';
import { ResponseComponent } from './usecase/response/response.component';
import { UseCaseQuoteComponent } from './usecase/use-case-quote/use-case-quote.component';
import { ChallengeComponent } from './usecase/challenge/challenge.component';
import { SolutionAffluenceHeroComponent } from './solutions/solution-affluence-hero/solution-affluence-hero.component';
import { SolutionGridComponent } from './solutions/solution-grid/solution-grid.component';
import { TeamQuoteComponent } from './core/team-quote/team-quote.component';

const impactivComponentsExports = [
  BannerComponent,
  FooterComponent,
  HeaderComponent,
  NumbersComponent,
  OurCustomersComponent,
  OurSolutionsComponent,
  OurSkillsComponent,
  QuoteComponent,
  WebAppFeaturesComponent,
  HomeHeroComponent,
  StatsNumbersComponent,
  SolutionWebAppHeroComponent,
  SolutionCarouselComponent,
  SolutionBlockComponent,
  DsmHeroComponent,
  OurExpertiseComponent,
  InfrastructureMasonryComponent,
  UseCaseResumeComponent,
  OtherSolutionsComponent,
  UseCaseHeroComponent,
  CustomerNeedComponent,
  ResponseComponent,
  UseCaseQuoteComponent,
  ChallengeComponent,
  SolutionGridComponent,
  SolutionAffluenceHeroComponent,
  TeamQuoteComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgxGlideModule],
  providers: [],
  declarations: [...impactivComponentsExports],
  exports: [...impactivComponentsExports],
})
export class ComponentsModule {}
