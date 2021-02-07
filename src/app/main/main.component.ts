import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerContainer, MatDrawerMode } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { LocalstorageService } from './services/localstorage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit , OnDestroy{

  @ViewChild('drawer')
  drawerComponent: MatDrawer | undefined

  @ViewChild('drawerContainer')
  drawerContainer: MatDrawerContainer | undefined;

  side: MatDrawerMode = 'push';

  cardsData: Array<any> = [];

  localStorageDataSubscription: Subscription;

  filterColor: string = 'All';

  constructor(private localStorageService: LocalstorageService,
    private cd: ChangeDetectorRef) {
    this.localStorageDataSubscription = this.localStorageService.isLocalStorageUpdated$.subscribe((value: boolean) => {
      this.refreshData();
    })
  }

  ngOnInit(): void {
    this.refreshData();
  }
  ngAfterViewInit() {
    this.drawerComponent = this.drawerComponent
  }

  toggleSidebar() {
    console.log(this.drawerContainer)
    if (this.drawerComponent) {
      this.drawerComponent.toggle();
    }
  }

  refreshData() {
    let data = this.localStorageService.getLocalStorage('noteData');
    if (this.filterColor != 'All') {
      this.cardsData = data.filter((eachData:any) => eachData.color == this.filterColor)
    } else {
      this.cardsData = data;
    }
    if (this.cd) {
      this.cd.detectChanges();
    }
  }

  getFilterData(updatedData:any) {
    this.cardsData = updatedData;
  }

  onColorClick(event:any, color:string) {
    if(this.drawerComponent) {
      this.drawerComponent.close();
    }
    this.filterColor = color;
    let existingData = this.localStorageService.getLocalStorage('noteData');
    if (color != 'All') {
      let updatedData = existingData.filter((data:any) => data.color == color);
      this.getFilterData(updatedData)
    } else {
      this.getFilterData(existingData);
    }
  }

  ngOnDestroy() {
    if (this.localStorageDataSubscription) {
      this.localStorageDataSubscription.unsubscribe();
    }
  }
}
