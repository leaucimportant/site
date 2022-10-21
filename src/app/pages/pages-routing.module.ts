import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerOptions } from '../services/config';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SolutionAffluenceComponent } from './solution-affluence/solution-affluence.component';
import { SolutionDSMComponent } from './solution-dsm/solution-dsm.component';
import { SolutionMobileComponent } from './solution-mobile/solution-mobile.component';
import { UseCaseComponent } from './use-case/use-case.component';

// IMPORTANT: ne pas refactor les paths par une variable, lors du build static la route n'est pas reconnue !
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'entreprise',
    component: CompanyComponent,
  },
  {
    path: 'solutions/mobile',
    component: SolutionMobileComponent,
  },
  {
    path: 'solutions/integration',
    component: SolutionDSMComponent,
  },
  {
    path: 'solutions/affluence',
    component: SolutionAffluenceComponent,
  },
  {
    path: 'usecase/:id',
    component: UseCaseComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
