import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreLibModule } from '../../components/core/core-lib.module';
import { SolutionsLibModule } from '../../components/solutions/solutions-lib.module';
import { SolutionDSMComponent } from './solution-dsm.component';

const dsmRoutes: Routes = [
  {
    path: '',
    component: SolutionDSMComponent,
  },
];

@NgModule({
  declarations: [SolutionDSMComponent],
  imports: [
    CommonModule,
    CoreLibModule,
    SolutionsLibModule,
    RouterModule.forChild(dsmRoutes),
  ],
  exports: [RouterModule],
})
export class SolutionDSMModule {}
