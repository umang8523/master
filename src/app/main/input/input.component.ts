import { Component, createPlatformFactory, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  baseForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.baseForm = this.createForm()
   }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    return this.fb.group({
      note: ['', Validators.required]
    })
  }

}
