import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Config } from '../services';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: Config.impactivRoutes.comingSoon,
    component: ComingSoonComponent,
  },
  {
    path: Config.impactivRoutes.contact,
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
