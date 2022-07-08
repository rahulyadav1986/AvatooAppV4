import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShortQuestionListingPage } from './short-question-listing.page';

const routes: Routes = [
  {
    path: '',
    component: ShortQuestionListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShortQuestionListingPageRoutingModule {}
