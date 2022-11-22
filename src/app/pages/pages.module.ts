import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreLibModule } from '../components/core/core-lib.module';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [CommonModule, PagesRoutingModule],
  exports: [CoreLibModule],
})
export class PagesModule {}
