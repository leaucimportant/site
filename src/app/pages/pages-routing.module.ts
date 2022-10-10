import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Config } from '../services';
import { routerOptions } from '../services/config';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SolutionMobileComponent } from './solution-mobile/solution-mobile.component';

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
  // {
  //   path: 'usecase/:id',
  //   component: SolutionMobileComponent,
  // },

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
