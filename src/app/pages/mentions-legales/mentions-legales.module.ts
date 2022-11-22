import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentionsLegalesComponent } from './mentions-legales.component';

const mentionsLegalesRoutes: Routes = [
  {
    path: '',
    component: MentionsLegalesComponent,
  },
];
@NgModule({
  declarations: [MentionsLegalesComponent],
  imports: [CommonModule, RouterModule.forChild(mentionsLegalesRoutes)],
  exports: [RouterModule],
})
export class MentionsLegalesModule {}
