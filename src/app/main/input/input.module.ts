import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InputComponent } from './input.component';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
      MatFormFieldModule
  ],
  exports: [
    InputComponent
  ],
  providers: [],
})
export class InputModule { }
