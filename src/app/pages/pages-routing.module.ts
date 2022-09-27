import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Config } from '../services';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SolutionMobileComponent } from './solution-mobile/solution-mobile.component';

const routes: Routes = [
  {
    path: Config.impactivRoutes.home,
    component: HomeComponent,
  },
  {
    path: Config.impactivRoutes.contact,
    component: ContactComponent,
  },
  {
    path: Config.impactivRoutes.company,
    component: CompanyComponent,
  },
  {
    path: Config.impactivRoutes.mobile,
    component: SolutionMobileComponent,
  },
  {
    path: '**',
    redirectTo: Config.impactivRoutes.home,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
