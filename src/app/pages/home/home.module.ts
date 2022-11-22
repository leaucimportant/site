import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreLibModule } from 'src/app/components/core/core-lib.module';
import { HomeLibModule } from '../../components/home/home-lib.module';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CoreLibModule,
    HomeLibModule,
    RouterModule.forChild(homeRoutes),
  ],
  exports: [RouterModule],
})
export class HomeModule {}
