import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicPage } from './music.page';

const routes: Routes = [
  {
    path: ':directory',
    component: MusicPage,
    pathMatch: 'full'
  },
  {
    path: ':directory/:hash',
    loadChildren: () => import('./show/show.module').then(m => m.ShowPageModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicPageRoutingModule { }
