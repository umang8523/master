import {MatDialogModule} from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { InputModule } from '../input/input.module';

@NgModule({
  declarations: [
      CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    InputModule
  ],
  exports: [
      CardComponent
  ],
  providers: [],
})
export class CardModule { }
