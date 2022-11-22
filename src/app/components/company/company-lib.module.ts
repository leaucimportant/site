import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibsModule } from 'src/app/libs-external/libs.module';

import { CompanyHeroComponent } from './company-hero/company-hero.component';
import { OurPartnersComponent } from './our-partners/our-partners.component';
import { TimelineComponent } from './timeline/timeline.component';

const companyComponentsExports = [
  CompanyHeroComponent,
  OurPartnersComponent,
  TimelineComponent,
];

@NgModule({
  imports: [CommonModule, LibsModule],
  declarations: [...companyComponentsExports],
  exports: [...companyComponentsExports],
})
export class CompanyLibModule {}
