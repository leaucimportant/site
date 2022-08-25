import { NgModule } from '@angular/core';
import {
  NgbModalModule,
  NgbPaginationModule,
  NgbTooltipModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';

const ngBootstrapImportsAndExports = [
  // NgbModalModule,
  // NgbPaginationModule,
  // NgbTypeaheadModule,
  NgbTooltipModule,
];

@NgModule({
  declarations: [],
  imports: [...ngBootstrapImportsAndExports],
  exports: [...ngBootstrapImportsAndExports],
})
export class NgBootstrapModule {}
