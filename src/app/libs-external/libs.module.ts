import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxGlideModule } from 'ngx-glide';

const libsImportsAndExports = [NgxGlideModule, RouterModule, NgbTooltipModule];

@NgModule({
  declarations: [],
  imports: [...libsImportsAndExports],
  exports: [...libsImportsAndExports],
})
export class LibsModule {}
