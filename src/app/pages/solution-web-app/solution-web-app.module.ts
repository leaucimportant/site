import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreLibModule } from '../../components/core/core-lib.module';
import { SolutionsLibModule } from '../../components/solutions/solutions-lib.module';
import { SolutionWebAppComponent } from './solution-web-app.component';

const webAppRoutes: Routes = [
  {
    path: '',
    component: SolutionWebAppComponent,
  },
];
@NgModule({
  declarations: [SolutionWebAppComponent],
  imports: [
    CommonModule,
    CoreLibModule,
    SolutionsLibModule,
    RouterModule.forChild(webAppRoutes),
  ],
  exports: [RouterModule],
})
export class SolutionWebAppModule {}
