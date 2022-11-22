import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreLibModule } from 'src/app/components/core/core-lib.module';
import { CompanyLibModule } from '../../components/company/company-lib.module';
import { CompanyComponent } from './company.component';

const companyRoutes: Routes = [
  {
    path: '',
    component: CompanyComponent,
  },
];

@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    CoreLibModule,
    CompanyLibModule,
    RouterModule.forChild(companyRoutes),
  ],
})
export class CompanyModule {}
