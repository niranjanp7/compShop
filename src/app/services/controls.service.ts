import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlsService {

  controls = {sideNavOpen: 'sideNavOpen'};

  sideNavOpen: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.sideNavOpen.next(this.getFromSession(this.controls.sideNavOpen) == 'true');
    console.log(this.getFromSession(this.controls.sideNavOpen) === 'true');
  }

  getSideNavOpen(): Observable<boolean> {
    return this.sideNavOpen.asObservable();
  }
  setSideNavOpen(value: boolean) {
    this.sideNavOpen.next(value);
    this.setToSession(this.controls.sideNavOpen, value.toString());
  }

  getFromSession(key: string): any {
    return sessionStorage.getItem(key);
  }

  setToSession(key: string, value: string): any {
    sessionStorage.setItem(key, value);
  }
}
