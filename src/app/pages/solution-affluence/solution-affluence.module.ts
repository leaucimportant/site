import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreLibModule } from '../../components/core/core-lib.module';
import { SolutionsLibModule } from '../../components/solutions/solutions-lib.module';
import { SolutionAffluenceComponent } from './solution-affluence.component';

const affluenceRoutes: Routes = [
  {
    path: '',
    component: SolutionAffluenceComponent,
  },
];

@NgModule({
  declarations: [SolutionAffluenceComponent],
  imports: [
    CommonModule,
    CoreLibModule,
    SolutionsLibModule,
    RouterModule.forChild(affluenceRoutes),
  ],
  exports: [RouterModule],
})
export class SolutionAffluenceModule {}
