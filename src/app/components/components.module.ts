import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { PrimengModule } from '../libs-external/primeng/primeng.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { numbersComponent } from './our-numbers/numbers.component';
import { BannerComponent } from './banner/banner.component';
import { OurCustomersComponent } from './our-customers/our-customers.component';
import { OurSolutionsComponent } from './our-solutions/our-solutions.component';

const impactivComponentsExports = [
  BannerComponent,
  FooterComponent,
  HeaderComponent,
  numbersComponent,
  OurCustomersComponent,
  OurSolutionsComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PrimengModule,
    ReactiveFormsModule,
    NgbTooltipModule,
  ],
  providers: [],
  declarations: [...impactivComponentsExports],
  exports: [...impactivComponentsExports, PrimengModule],
})
export class ComponentsModule {}
