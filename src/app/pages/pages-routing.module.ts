import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Config } from '../services';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: Config.impactivRoutes.mobile,
    component: ContactComponent,
  },
  {
    path: Config.impactivRoutes.contact,
    component: ContactComponent,
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
