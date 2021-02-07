import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  isLocalStorageUpdated$: Subject<boolean> = new Subject();

  filterdColor$: Subject<string> = new Subject();

  // constructor(public localStorage: Storage) { }

  getLocalStorage(key:any) {
    let item = localStorage.getItem(key)
    if (item) {
      return JSON.parse(item);
    } else {
      return [];
    }
  }

  setLocalStorage(key:any, value: Array<any>) {
    localStorage.setItem(key, JSON.stringify(value))
    this.isLocalStorageUpdated$.next(true);
  }

  removeLocalStorage(key: any) {
    localStorage.removeItem(key);
    this.isLocalStorageUpdated$.next(true);
  }

}
