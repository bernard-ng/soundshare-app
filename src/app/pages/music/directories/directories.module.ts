import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectoriesPageRoutingModule } from './directories-routing.module';

import { DirectoriesPage } from './directories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectoriesPageRoutingModule
  ],
  declarations: [DirectoriesPage]
})
export class DirectoriesPageModule {}
