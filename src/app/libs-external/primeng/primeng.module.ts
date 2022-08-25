import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TabViewModule } from 'primeng/tabview';

const primeNgImportsAndExports = [CarouselModule, TabViewModule];

@NgModule({
  imports: [...primeNgImportsAndExports],
  exports: [...primeNgImportsAndExports],
})
export class PrimengModule {}
