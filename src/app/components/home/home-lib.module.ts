import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibsModule } from 'src/app/libs-external/libs.module';

import { HomeHeroComponent } from './home-hero/home-hero.component';
import { OurSkillsComponent } from './our-skills/our-skills.component';
import { OurSolutionsComponent } from './our-solutions/our-solutions.component';
import { SolutionCardComponent } from './solution-card/solution-card.component';

const homeComponentsExports = [
  OurSolutionsComponent,
  OurSkillsComponent,
  HomeHeroComponent,
  SolutionCardComponent,
];

@NgModule({
  imports: [CommonModule, LibsModule],
  declarations: [...homeComponentsExports],
  exports: [...homeComponentsExports],
})
export class HomeLibModule {}
