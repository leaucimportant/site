import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxGlideModule } from 'ngx-glide';

import { CompanyHeroComponent } from './company/company-hero/company-hero.component';
import { OurPartnersComponent } from './company/our-partners/our-partners.component';
import { TimelineComponent } from './company/timeline/timeline.component';
import { BannerComponent } from './core/banner/banner.component';
import { CardsComponent } from './core/cards/cards.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { NumbersComponent } from './core/numbers/numbers.component';
import { OurCustomersComponent } from './core/our-customers/our-customers.component';
import { QuoteComponent } from './core/quote/quote.component';
import { StatsNumbersComponent } from './core/stats-numbers/stats-numbers.component';
import { UseCaseResumeComponent } from './core/use-case-resume/use-case-resume.component';
import { HomeHeroComponent } from './home/home-hero/home-hero.component';
import { OurSkillsComponent } from './home/our-skills/our-skills.component';
import { OurSolutionsComponent } from './home/our-solutions/our-solutions.component';
import { SolutionCardComponent } from './home/solution-card/solution-card.component';
import { DsmHeroComponent } from './solutions/dsm-hero/dsm-hero.component';
import { InfrastructureMasonryComponent } from './solutions/infrastructure-masonry/infrastructure-masonry.component';
import { OtherSolutionsComponent } from './solutions/other-solutions/other-solutions.component';
import { ScreenHeroComponent } from './solutions/screen-hero/screen-hero.component';
import { SolutionAffluenceHeroComponent } from './solutions/solution-affluence-hero/solution-affluence-hero.component';
import { SolutionBlockComponent } from './solutions/solution-block/solution-block.component';
import { SolutionCarouselComponent } from './solutions/solution-carousel/solution-carousel.component';
import { SolutionGridComponent } from './solutions/solution-grid/solution-grid.component';
import { WebAppFeaturesComponent } from './solutions/web-app-features/web-app-features.component';
import { SolutionWebAppHeroComponent } from './solutions/web-app-hero/web-app-hero.component';
import { ChallengeComponent } from './usecase/challenge/challenge.component';
import { CustomerNeedComponent } from './usecase/customer-need/customer-need.component';
import { ResponseComponent } from './usecase/response/response.component';
import { UseCaseHeroComponent } from './usecase/use-case-hero/use-case-hero.component';
import { UseCaseQuoteComponent } from './usecase/use-case-quote/use-case-quote.component';
import { AffluenceMasonryComponent } from './solutions/affluence-masonry/affluence-masonry.component';
import { MasonryCardTextComponent } from './core/masonry-card-text/masonry-card-text.component';
import { MasonryCardImageComponent } from './core/masonry-card-image/masonry-card-image.component';

const impactivComponentsExports = [
  BannerComponent,
  FooterComponent,
  HeaderComponent,
  NumbersComponent,
  OurCustomersComponent,
  OurSolutionsComponent,
  OurSkillsComponent,
  WebAppFeaturesComponent,
  HomeHeroComponent,
  StatsNumbersComponent,
  SolutionWebAppHeroComponent,
  SolutionCarouselComponent,
  SolutionBlockComponent,
  DsmHeroComponent,
  CardsComponent,
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
  ScreenHeroComponent,
  QuoteComponent,
  CompanyHeroComponent,
  OurPartnersComponent,
  TimelineComponent,
  ScreenHeroComponent,
  SolutionCardComponent,
  AffluenceMasonryComponent,
  MasonryCardTextComponent,
  MasonryCardImageComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgxGlideModule],
  providers: [],
  declarations: [...impactivComponentsExports],
  exports: [...impactivComponentsExports],
})
export class ComponentsModule {}
