import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectoriesPage } from './directories.page';

const routes: Routes = [
  {
    path: '',
    component: DirectoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectoriesPageRoutingModule {}
