import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DirectoriesPageRoutingModule} from './directories-routing.module';

import {DirectoriesPage} from './directories.page';
import {FolderCardComponent} from '../../../components/cards/folder-card/folder-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectoriesPageRoutingModule
  ],
  declarations: [
    FolderCardComponent,
    DirectoriesPage
  ]
})
export class DirectoriesPageModule {
}
