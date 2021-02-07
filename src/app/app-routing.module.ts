import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';

const routes: Routes = [
  {
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
