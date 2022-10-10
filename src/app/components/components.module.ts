import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxGlideModule } from 'ngx-glide';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NumbersComponent } from './numbers/numbers.component';
import { BannerComponent } from './banner/banner.component';
import { OurCustomersComponent } from './our-customers/our-customers.component';
import { OurSolutionsComponent } from './our-solutions/our-solutions.component';
import { OurSkillsComponent } from './our-skills/our-skills.component';
import { QuoteComponent } from './quote/quote.component';
import { SolutionFeaturesComponent } from './solution-features/solution-features.component';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { StatsNumbersComponent } from './stats-numbers/stats-numbers.component';
import { SolutionsHeroComponent } from './solutions-hero/solutions-hero.component';
import { SolutionCarouselComponent } from './solution-carousel/solution-carousel.component';

const impactivComponentsExports = [
  BannerComponent,
  FooterComponent,
  HeaderComponent,
  NumbersComponent,
  OurCustomersComponent,
  OurSolutionsComponent,
  OurSkillsComponent,
  QuoteComponent,
  SolutionFeaturesComponent,
  HomeHeroComponent,
  StatsNumbersComponent,
  SolutionsHeroComponent,
  SolutionCarouselComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule, NgxGlideModule],
  providers: [],
  declarations: [...impactivComponentsExports],
  exports: [...impactivComponentsExports],
})
export class ComponentsModule {}
