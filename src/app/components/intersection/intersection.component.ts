import { Component } from '@angular/core';
import { Intersection } from 'src/app/shared/intersection.model';
import { TrafficService } from 'src/app/shared/traffic.service';

@Component({
  selector: 'app-intersection',
  templateUrl: './intersection.component.html',
  styleUrls: ['./intersection.component.css'],
})
export class IntersectionComponent {
  currentIntersection: Intersection;

  constructor(private trafficServ: TrafficService) {}

  ngOnInit() {
    this.currentIntersection = this.trafficServ.getIntersectionById(1);
  }

  onStartIntersection() {
    this.trafficServ.startIntersection(this.currentIntersection.id);
  }
}
