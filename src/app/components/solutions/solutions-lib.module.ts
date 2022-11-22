import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibsModule } from 'src/app/libs-external/libs.module';
import { CoreLibModule } from '../core/core-lib.module';

import { AffluenceMasonryComponent } from './affluence-masonry/affluence-masonry.component';
import { DsmHeroComponent } from './dsm-hero/dsm-hero.component';
import { InfrastructureMasonryComponent } from './infrastructure-masonry/infrastructure-masonry.component';
import { OtherSolutionsComponent } from './other-solutions/other-solutions.component';
import { ScreenHeroComponent } from './screen-hero/screen-hero.component';
import { ScreenMasonryComponent } from './screen-masonry/screen-masonry.component';
import { SolutionAffluenceHeroComponent } from './solution-affluence-hero/solution-affluence-hero.component';
import { SolutionBlockComponent } from './solution-block/solution-block.component';
import { SolutionCarouselComponent } from './solution-carousel/solution-carousel.component';
import { SolutionGridComponent } from './solution-grid/solution-grid.component';
import { WebAppFeaturesComponent } from './web-app-features/web-app-features.component';
import { SolutionWebAppHeroComponent } from './web-app-hero/web-app-hero.component';

const solutionsComponentsExports = [
  WebAppFeaturesComponent,
  SolutionWebAppHeroComponent,
  SolutionCarouselComponent,
  SolutionBlockComponent,
  DsmHeroComponent,
  InfrastructureMasonryComponent,
  OtherSolutionsComponent,
  SolutionGridComponent,
  SolutionAffluenceHeroComponent,
  ScreenHeroComponent,
  ScreenHeroComponent,
  AffluenceMasonryComponent,
  ScreenMasonryComponent,
];

@NgModule({
  imports: [CommonModule, LibsModule, CoreLibModule],
  declarations: [...solutionsComponentsExports],
  exports: [...solutionsComponentsExports],
})
export class SolutionsLibModule {}
