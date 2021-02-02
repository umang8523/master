import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RecaptchaModule } from "ng-recaptcha";
import { MtabCaptchaComponent } from "./mtab-captcha.component";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        BrowserModule,
        RecaptchaModule,
        HttpClientModule
    ],
    declarations: [
        MtabCaptchaComponent
    ]
})

export class MtabCaptchaModule { }