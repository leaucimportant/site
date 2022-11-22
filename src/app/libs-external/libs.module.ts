import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxGlideModule } from 'ngx-glide';

const libsImportsAndExports = [NgxGlideModule, RouterModule];

@NgModule({
  declarations: [],
  imports: [...libsImportsAndExports],
  exports: [...libsImportsAndExports],
})
export class LibsModule {}
