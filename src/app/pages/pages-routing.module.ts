import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routerOptions } from '../services/config/routes.config';

// IMPORTANT: ne pas refactor les paths par une variable, lors du build static la route n'est pas reconnue !
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('src/app/pages/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
  {
    path: 'entreprise',
    loadChildren: () =>
      import('src/app/pages/company/company.module').then(
        (m) => m.CompanyModule
      ),
  },
  {
    path: 'solutions/application-collaborateurs',
    loadChildren: () =>
      import('src/app/pages/solution-web-app/solution-web-app.module').then(
        (m) => m.SolutionWebAppModule
      ),
  },
  {
    path: 'solutions/developpement-sur-mesure',
    loadChildren: () =>
      import('src/app/pages/solution-dsm/solution-dsm.module').then(
        (m) => m.SolutionDSMModule
      ),
  },
  {
    path: 'solutions/affluence',
    loadChildren: () =>
      import('src/app/pages/solution-affluence/solution-affluence.module').then(
        (m) => m.SolutionAffluenceModule
      ),
  },
  {
    path: 'solutions/affichage-dynamique',
    loadChildren: () =>
      import('src/app/pages/solution-screen/solution-screen.module').then(
        (m) => m.SolutionScreenModule
      ),
  },
  {
    path: 'cas-clients/:slug',
    loadChildren: () =>
      import('src/app/pages/use-case/use-case-lib.module').then(
        (m) => m.UseCaseModule
      ),
  },
  {
    path: 'mentions-legales',
    loadChildren: () =>
      import('src/app/pages/mentions-legales/mentions-legales.module').then(
        (m) => m.MentionsLegalesModule
      ),
  },
  {
    path: 'non-trouvee',
    loadChildren: () =>
      import('src/app/pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  {
    path: '**',
    redirectTo: 'non-trouvee',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
