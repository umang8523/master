import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { MtabCaptchaComponent } from './main/mtab-captcha/mtab-captcha.component';

const routes: Routes = [
  {
    path: 'captcha',
    component: MtabCaptchaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
