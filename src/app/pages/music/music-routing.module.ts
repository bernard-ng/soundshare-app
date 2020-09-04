import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'directories',
    loadChildren: () => import('./directories/directories.module').then(m => m.DirectoriesPageModule),
    pathMatch: 'full'
  },
  {
    path: 'directory/:directory',
    loadChildren: () => import('./directory/directory.module').then(m => m.DirectoryPageModule),
    pathMatch: 'full'
  },
  {
    path: 'directories/:directory/:hash',
    loadChildren: () => import('./show/show.module').then(m => m.ShowPageModule),
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicPageRoutingModule {
}
