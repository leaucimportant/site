import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
// import { NgBootstrapModule } from '../libs-external/ng-bootstrap/ng-bootstrap.module';

import { ContactComponent } from './contact/contact.component';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { SolutionMobileComponent } from './solution-mobile/solution-mobile.component';
import { SolutionDSMComponent } from './solution-dsm/solution-dsm.component';
import { UseCaseComponent } from './use-case/use-case.component';
import { SolutionAffluenceComponent } from './solution-affluence/solution-affluence.component';

@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    CompanyComponent,
    SolutionMobileComponent,
    SolutionDSMComponent,
    UseCaseComponent,
    SolutionAffluenceComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    // NgBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ComponentsModule],
})
export class PagesModule {}
