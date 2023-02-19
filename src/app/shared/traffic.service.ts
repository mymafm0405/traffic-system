import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Direction } from './direction.model';
import { Intersection } from './intersection.model';
import { Light } from './light.model';

@Injectable({
  providedIn: 'root',
})
export class TrafficService {
  lightStatusChanged = new Subject<{ intId: number; status: string }>();
  intActiveChanged = new Subject<number>();
  goTypeActive = new Subject<string>();
  activateNextDirection = new Subject<{activate: boolean, intId: number}>();


  intersections: Intersection[] = [
    new Intersection(1, [
      new Direction(1, [
        new Light(1, 'up'),
        new Light(2, 'up'),
        new Light(3, 'up'),
      ]),
      new Direction(2, [
        new Light(1, 'right'),
        new Light(2, 'right'),
        new Light(3, 'right'),
      ]),
      new Direction(3, [
        new Light(1, 'down'),
        new Light(2, 'down'),
        new Light(3, 'down'),
      ]),
      new Direction(4, [
        new Light(1, 'left'),
        new Light(2, 'left'),
        new Light(3, 'left'),
      ]),
    ]),
    new Intersection(2, [
      new Direction(1, [
        new Light(1, 'up'),
        new Light(2, 'up'),
        new Light(3, 'up'),
      ]),
      new Direction(2, [
        new Light(1, 'right'),
        new Light(2, 'right'),
        new Light(3, 'right'),
      ]),
      new Direction(3, [
        new Light(1, 'down'),
        new Light(2, 'down'),
        new Light(3, 'down'),
      ]),
      new Direction(4, [
        new Light(1, 'left'),
        new Light(2, 'left'),
        new Light(3, 'left'),
      ]),
    ]),
    new Intersection(3, [
      new Direction(1, [
        new Light(1, 'up'),
        new Light(2, 'up'),
        new Light(3, 'up'),
      ]),
      new Direction(2, [
        new Light(1, 'right'),
        new Light(2, 'right'),
        new Light(3, 'right'),
      ]),
      new Direction(3, [
        new Light(1, 'down'),
        new Light(2, 'down'),
        new Light(3, 'down'),
      ]),
      new Direction(4, [
        new Light(1, 'left'),
        new Light(2, 'left'),
        new Light(3, 'left'),
      ]),
    ]),
    new Intersection(4, [
      new Direction(1, [
        new Light(1, 'up'),
        new Light(2, 'up'),
        new Light(3, 'up'),
      ]),
      new Direction(2, [
        new Light(1, 'right'),
        new Light(2, 'right'),
        new Light(3, 'right'),
      ]),
      new Direction(3, [
        new Light(1, 'down'),
        new Light(2, 'down'),
        new Light(3, 'down'),
      ]),
      new Direction(4, [
        new Light(1, 'left'),
        new Light(2, 'left'),
        new Light(3, 'left'),
      ]),
    ]),
  ];

  getIntersectionById(id: number) {
    return this.intersections.slice().find((int) => int.id === id);
  }

  getAllIntersections() {
    return this.intersections.slice();
  }

  startIntersection(intersectionId: number) {
    console.log('Intersection Id: ' + intersectionId);
    this.intActiveChanged.next(intersectionId);
  }
}
