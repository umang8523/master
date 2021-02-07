import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main.component';
import { MaintoolbarComponent } from './maintoolbar/maintoolbar.component';
import { MainToolbarModule } from './maintoolbar/maintoolbar.module';
import { LocalstorageService } from './services/localstorage.service';
import { InputComponent } from './input/input.component';
import { InputModule } from './input/input.module';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { OverlayComponent } from './overlay/overlay.component';
import { OverlayModule } from './overlay/overlay.module';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { CardComponent } from './card/card.component';
import { SnackbarModule } from './snackbar/snackbar.module';
import { CardModule } from './card/card.module';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    MainToolbarModule,
    InputModule,
    MatSidenavModule,
    SidebarModule,
    OverlayModule,
    SnackbarModule,
    CardModule
  ],
  providers: [
      LocalstorageService
  ],
})
export class MainModule { }
