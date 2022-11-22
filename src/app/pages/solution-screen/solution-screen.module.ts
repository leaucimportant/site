import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreLibModule } from '../../components/core/core-lib.module';
import { SolutionsLibModule } from '../../components/solutions/solutions-lib.module';
import { SolutionScreenComponent } from './solution-screen.component';

const screenRoutes: Routes = [
  {
    path: '',
    component: SolutionScreenComponent,
  },
];

@NgModule({
  declarations: [SolutionScreenComponent],
  imports: [
    CommonModule,
    CoreLibModule,
    SolutionsLibModule,
    RouterModule.forChild(screenRoutes),
  ],
  exports: [RouterModule],
})
export class SolutionScreenModule {}
