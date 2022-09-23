import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { NgBootstrapModule } from '../libs-external/ng-bootstrap/ng-bootstrap.module';

import { ContactComponent } from './contact/contact.component';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    NgBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ComponentsModule],
})
export class PagesModule {}
