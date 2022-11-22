import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreLibModule } from '../../components/core/core-lib.module';
import { UseCaseLibModule } from '../../components/use-case/use-case-lib.module';
import { UseCaseComponent } from './use-case.component';

const useCaseRoutes: Routes = [
  {
    path: '',
    component: UseCaseComponent,
  },
];

@NgModule({
  declarations: [UseCaseComponent],
  imports: [
    CommonModule,
    CoreLibModule,
    UseCaseLibModule,
    RouterModule.forChild(useCaseRoutes),
  ],
  exports: [RouterModule],
})
export class UseCaseModule {}
