import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InputComponent } from './input.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SnackbarModule } from '../snackbar/snackbar.module';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      SnackbarModule
  ],
  exports: [
    InputComponent
  ],
  providers: [],
})
export class InputModule { }
