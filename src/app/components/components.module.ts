import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { PrimengModule } from '../libs-external/primeng/primeng.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';

const impactivComponentsExports = [FooterComponent, HeaderComponent, BannerComponent];

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
