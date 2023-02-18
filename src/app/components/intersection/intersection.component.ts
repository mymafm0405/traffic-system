import { Component } from '@angular/core';
import { TrafficService } from 'src/app/shared/traffic.service';

@Component({
  selector: 'app-intersection',
  templateUrl: './intersection.component.html',
  styleUrls: ['./intersection.component.css'],
})
export class IntersectionComponent {
  constructor(private trafficServ: TrafficService) {}

  onStartIntersection() {
    this.trafficServ.startIntersection(1);
  }
}
