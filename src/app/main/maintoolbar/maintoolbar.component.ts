import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-maintoolbar',
  templateUrl: './maintoolbar.component.html',
  styleUrls: ['./maintoolbar.component.scss']
})
export class MaintoolbarComponent implements OnInit {

  @Output()
  eMenuClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(event:any) {
    this.eMenuClick.emit(event);
  }
}
