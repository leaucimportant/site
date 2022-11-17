import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Config } from '../services';
import { routerOptions } from '../services/config';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MentionsLegalesComponent } from './mentions-legales/mentions-legales.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SolutionAffluenceComponent } from './solution-affluence/solution-affluence.component';
import { SolutionDSMComponent } from './solution-dsm/solution-dsm.component';
import { SolutionScreenComponent } from './solution-screen/solution-screen.component';
import { SolutionWebAppComponent } from './solution-web-app/solution-web-app.component';
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
    path: 'solutions/application-collaborateurs',
    component: SolutionWebAppComponent,
  },
  {
    path: 'solutions/developpement-sur-mesure',
    component: SolutionDSMComponent,
  },
  {
    path: 'solutions/affluence',
    component: SolutionAffluenceComponent,
  },
  {
    path: 'solutions/affichage-dynamique',
    component: SolutionScreenComponent,
  },
  {
    path: 'cas-clients/:slug',
    component: UseCaseComponent,
  },
  {
    path: 'mentions-legales',
    component: MentionsLegalesComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: Config.impactivRoutes.notFound,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
