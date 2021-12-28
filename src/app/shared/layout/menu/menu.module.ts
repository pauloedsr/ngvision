import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MenuComponent } from './menu.component';
import { SubmenuComponent } from './submenu/submenu.component';



@NgModule({
  declarations: [
    MenuComponent,
    SubmenuComponent

  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    MenuComponent,
    SubmenuComponent
  ]
})
export class MenuModule { }
