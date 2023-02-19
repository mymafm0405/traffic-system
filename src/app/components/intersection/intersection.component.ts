import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Intersection } from 'src/app/shared/intersection.model';
import { TrafficService } from 'src/app/shared/traffic.service';

@Component({
  selector: 'app-intersection',
  templateUrl: './intersection.component.html',
  styleUrls: ['./intersection.component.css'],
})
export class IntersectionComponent {
  @Input() currentIntersection: Intersection;
  start = 0;

  constructor(private trafficServ: TrafficService) {}

  onStartIntersection() {
    this.repeat();
    this.trafficServ.goTypeActive.next(
      this.currentIntersection.directions[this.start].lights[0].goType
    );
    this.trafficServ.startIntersection(this.currentIntersection.id);
    if (this.start < this.currentIntersection.directions.length - 1) {
      this.start++;
    } else {
      this.start = 0;
    }
  }

  // Here you can control after how many seconds should activate the next direction
  repeat() {
    setTimeout(() => {
      this.onStartIntersection();
    }, 15000);
  }
}
