import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mtab-captcha',
  templateUrl: './mtab-captcha.component.html',
  styleUrls: ['./mtab-captcha.component.scss']
})
export class MtabCaptchaComponent implements OnInit {

  SITE_KEY = "6LdBviYaAAAAACe966FombDYlGlW_V9SCvX-DEDp";

  url = "https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}&remoteip=${req.connection.remoteAddress}`"
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  resolved(token:string) {
    console.log(token)
    this.http.post(`http://www.google.com/recaptcha/api/siteverify?secret=6LdBviYaAAAAAC6o69ckKpSIkAda5I8teXCwmXko&response=${token}`, {recaptcha: token})
    .subscribe(response => {
      console.log(response)
    })
  }

}
