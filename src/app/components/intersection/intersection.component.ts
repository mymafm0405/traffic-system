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
  

  constructor(private trafficServ: TrafficService) {}

  onStartIntersection() {
    this.trafficServ.startIntersection(this.currentIntersection.id);
  }
  
}
