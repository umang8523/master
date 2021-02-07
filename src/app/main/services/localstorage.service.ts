import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  // constructor(public localStorage: Storage) { }

  // setLocalStorage(key, value: Array<any>) {
  //   localStorage.setItem(key, JSON.stringify(value));
  // }

  // removeLocalStorage(key) {
  //   localStorage.removeItem(key);
  // }

  getLocalStorage(key:any) {
      return localStorage.getItem(key)
  }

  setLocalStorage(key:any, value: Array<any>) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  removeLocalStorage(key: any) {
    localStorage.removeItem(key);
  }

}
