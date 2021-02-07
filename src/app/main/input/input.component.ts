import { sequence } from '@angular/animations';
import { Component, createPlatformFactory, EventEmitter, Inject, OnInit, Optional, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LocalstorageService } from '../services/localstorage.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  baseForm: FormGroup;

  showColor: boolean = false;

  @Output()
  eSavedCard: EventEmitter<any> = new EventEmitter();
  
  @Output()
  eDeleted: EventEmitter<any> = new EventEmitter();

  recenlyCreatedtData: any;

  recentlyDeletedData: any;

  recentlyUpdatedNewData: any;

  recentlyUpdatedOldData: any;

  data: any
  constructor(public fb: FormBuilder,
    private localStorageService: LocalstorageService,
    private snackBar: MatSnackBar,
    @Optional() public dialogRef: MatDialogRef<InputComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) data: any) {
    this.baseForm = this.createForm();
    this.data = data
   }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    return this.fb.group({
      note: ['', Validators.required]
    })
  }
  
  ngAfterViewInit() {
    if (this.data) {
      this.baseForm.get('note')?.setValue(this.data.noteText);
    }
  }

  onInputFocus(event:any) {
      this.showColor = true;
  }

  onColorClick(event: any, color: string) {

    this.saveNoteData(color);
    this.showColor = false;
    this.baseForm.get('note')?.setValue(null);
    this.baseForm.get('note')?.updateValueAndValidity();
    if (this.data) {
      this.dialogRef.close();
    }
  }

  saveNoteData(color: string) {
    let existingData: Array<any> = this.localStorageService.getLocalStorage('noteData');
    if (!(existingData && existingData.length)) {
      existingData = [];
    } 
    if (this.data) {
      existingData = existingData.map((eachData:any) => {
        if (JSON.stringify(eachData.dateTime) == JSON.stringify(this.data.dateTime)) {
          this.recentlyUpdatedOldData = eachData;
          let updatedData = this.data
          updatedData.noteText = this.baseForm.get('note')?.value
          updatedData.color = color;
          updatedData.dateTime = new Date();
          this.recentlyUpdatedNewData = updatedData;
          return updatedData;
        } else {
          return eachData;
        }
      })

      console.log(existingData)
    } else {
      existingData.push(this.getNoteDataToBeSaved(color, existingData.length+1));
    }
    this.localStorageService.setLocalStorage('noteData', existingData);
    if (this.data) {
      this.openSnackBar('Not Updated', 'updated')
    } else {
      this.openSnackBar('Not Added', 'created')
    }
  }

  openSnackBar(message: string, action:string) {
    this.snackBar.open(message, 'Undo',{
      duration: 3000,
    }).afterDismissed().subscribe((data: any) => {
      if (data.dismissedByAction) {
        let existingData = this.localStorageService.getLocalStorage('noteData');
        if (action == 'created') {
          let updatedData = existingData.filter((eachData:any) => JSON.stringify(eachData.dateTime) != JSON.stringify(this.recenlyCreatedtData.dateTime));
          this.localStorageService.setLocalStorage('noteData', updatedData);
        } else if (action == 'deleted'){
          existingData.push(this.recentlyDeletedData);
          this.localStorageService.setLocalStorage('noteData', existingData);
        } else if (action == 'updated') {
          let updatedData = existingData.map((eachData:any) => {
            if (JSON.stringify(eachData.dateTime) == JSON.stringify(this.recentlyUpdatedNewData.dateTime)) {
              return this.recentlyUpdatedOldData;
            } else {
              return eachData;
            }
          })
          this.localStorageService.setLocalStorage('noteData', updatedData);
        }
      }
    });
  }

  getNoteDataToBeSaved(color: string, sequence?: number) {
    this.recenlyCreatedtData = 
     {
      color: color,
      noteText: this.baseForm.get('note')?.value,
      sequence: sequence,
      dateTime: new Date()
    }
    return this.recenlyCreatedtData;
  }

  deleteClickHandler(event: any) {
    let existingData = this.localStorageService.getLocalStorage('noteData');
    let updatedData = existingData.filter((data:any) => data.dateTime != this.data.dateTime);
    this.recentlyDeletedData = existingData.find((eachData:any) => JSON.stringify(eachData.dateTime) == JSON.stringify(this.data.dateTime));
    this.localStorageService.setLocalStorage('noteData', updatedData);
    console.log(this.recentlyDeletedData)
    this.dialogRef.close();
    this.openSnackBar('Note Deleted', 'deleted')
  }

}
