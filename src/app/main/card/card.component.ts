import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  card: any;

  @ViewChild('input')
  inputComponent: InputComponent | undefined;

  dialogRef: any

  @Output()
  eRefreshCards: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getCardColor() {
    return this.card.color;
  }

  
  onCardClick() {
    let dialogConfig = new MatDialogConfig()
    dialogConfig.data = this.card
    // dialogConfig.minHeight = 200;
    dialogConfig.minWidth = 400;
    dialogConfig.height = 'auto';
    this.dialogRef = this.dialog.open(InputComponent, dialogConfig) 
  }
}
