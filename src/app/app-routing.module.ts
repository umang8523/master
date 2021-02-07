import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
