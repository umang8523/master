import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main.component';
import { MaintoolbarComponent } from './maintoolbar/maintoolbar.component';
import { MainToolbarModule } from './maintoolbar/maintoolbar.module';
import { LocalstorageService } from './services/localstorage.service';
import { InputComponent } from './input/input.component';
import { InputModule } from './input/input.module';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    MainToolbarModule,
    InputModule
  ],
  providers: [
      LocalstorageService
  ],
})
export class MainModule { }
