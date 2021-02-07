import {MatDialogModule} from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OverlayComponent } from "./overlay.component";


@NgModule({
  declarations: [
      OverlayComponent
  ],
  imports: [
    MatDialogModule
  ],
  exports: [
      OverlayComponent
  ],
  providers: [],
})
export class OverlayModule { }
