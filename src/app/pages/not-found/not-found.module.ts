import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

const notFoundRoutes: Routes = [
  {
    path: '',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, RouterModule.forChild(notFoundRoutes)],
  exports: [RouterModule],
})
export class NotFoundModule {}
