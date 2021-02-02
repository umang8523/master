import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtabCaptchaComponent } from './mtab-captcha.component';

describe('MtabCaptchaComponent', () => {
  let component: MtabCaptchaComponent;
  let fixture: ComponentFixture<MtabCaptchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtabCaptchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtabCaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
