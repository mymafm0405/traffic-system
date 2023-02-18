import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Direction } from './direction.model';
import { Intersection } from './intersection.model';
import { Light } from './light.model';

@Injectable({
  providedIn: 'root',
})
export class TrafficService {
  lightStatusChanged = new Subject<string>();

  intersections: Intersection[] = [
    new Intersection(1, [
      new Direction(1, [
        new Light(1, 'front'),
        new Light(2, 'front'),
        new Light(3, 'front'),
      ]),
      new Direction(2, [
        new Light(1, 'right'),
        new Light(2, 'right'),
        new Light(3, 'right'),
      ]),
      new Direction(3, [
        new Light(1, 'back'),
        new Light(2, 'back'),
        new Light(3, 'back'),
      ]),
      new Direction(4, [
        new Light(1, 'left'),
        new Light(2, 'left'),
        new Light(3, 'left'),
      ]),
    ]),
  ];

  changeLight(status: string) {
    this.lightStatusChanged.next(status);
  }

  getIntersectionById(id: number) {
    return this.intersections.slice().find(int => int.id === id)
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
