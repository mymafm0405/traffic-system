import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrafficService {
  lightStatusChanged = new Subject<string>();

  constructor() {}

  changeLight(status: string) {
    this.lightStatusChanged.next(status);
  }

  startIntersection(intersectionId: number) {
    console.log('Intersection Id: ' + intersectionId);

    this.startWorkingStyle();
  }

  startWorkingStyle() {
    this.lightStatusChanged.next('green');
    setTimeout(() => {
      this.lightStatusChanged.next('ready');
      setTimeout(() => {
        this.lightStatusChanged.next('yellow');
        setTimeout(() => {
          this.lightStatusChanged.next('off');
        }, 3000);
      }, 5000);
    }, 5000);
  }
}
