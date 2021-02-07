import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
      MatSidenavModule,
  ],
  exports: [
    SidebarComponent
  ],
  providers: [],
})
export class SidebarModule { }
