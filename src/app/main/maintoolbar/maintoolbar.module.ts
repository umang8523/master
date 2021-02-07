import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaintoolbarComponent } from './maintoolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    MaintoolbarComponent,
  ],
  imports: [
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
      MaintoolbarComponent
  ],
  providers: [],
})
export class MainToolbarModule { }
