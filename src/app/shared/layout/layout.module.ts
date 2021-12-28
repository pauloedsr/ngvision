import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LayoutComponent } from './layout.component';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MenuModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
