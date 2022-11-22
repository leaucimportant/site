import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibsModule } from 'src/app/libs-external/libs.module';
import { BannerComponent } from './banner/banner.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MasonryCardImageComponent } from './masonry-card-image/masonry-card-image.component';
import { MasonryCardTextComponent } from './masonry-card-text/masonry-card-text.component';
import { NumbersComponent } from './numbers/numbers.component';
import { OurCustomersComponent } from './our-customers/our-customers.component';
import { QuoteComponent } from './quote/quote.component';
import { StatsNumbersComponent } from './stats-numbers/stats-numbers.component';
import { UseCaseQuoteComponent } from './use-case-quote/use-case-quote.component';
import { UseCaseResumeComponent } from './use-case-resume/use-case-resume.component';

const coreComponentsExports = [
  BannerComponent,
  FooterComponent,
  HeaderComponent,
  NumbersComponent,
  OurCustomersComponent,
  StatsNumbersComponent,
  CardsComponent,
  UseCaseResumeComponent,
  QuoteComponent,
  MasonryCardTextComponent,
  MasonryCardImageComponent,
  UseCaseQuoteComponent,
];

@NgModule({
  imports: [CommonModule, LibsModule],
  providers: [],
  declarations: [...coreComponentsExports],
  exports: [...coreComponentsExports],
})
export class CoreLibModule {}
