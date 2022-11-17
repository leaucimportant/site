import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

import { ContactComponent } from './contact/contact.component';

import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SolutionAffluenceComponent } from './solution-affluence/solution-affluence.component';
import { SolutionDSMComponent } from './solution-dsm/solution-dsm.component';
import { SolutionWebAppComponent } from './solution-web-app/solution-web-app.component';
import { UseCaseComponent } from './use-case/use-case.component';
import { SolutionScreenComponent } from './solution-screen/solution-screen.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent,
    CompanyComponent,
    SolutionWebAppComponent,
    SolutionDSMComponent,
    UseCaseComponent,
    SolutionAffluenceComponent,
    MentionsLegalesComponent,
    SolutionScreenComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ComponentsModule],
})
export class PagesModule {}
