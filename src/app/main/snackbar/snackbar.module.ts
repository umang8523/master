import {MatDialogModule} from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SnackbarComponent } from './snackbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
      SnackbarComponent
  ],
  imports: [
    MatSnackBarModule
  ],
  exports: [
      SnackbarComponent
  ],
  providers: [],
})
export class SnackbarModule { }
