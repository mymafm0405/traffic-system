import { Component } from '@angular/core';
import { Intersection } from './shared/intersection.model';
import { TrafficService } from './shared/traffic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  allIntersections: Intersection[] = [];

  constructor(private trafficServ: TrafficService) {}

  ngOnInit() {
    this.allIntersections = this.trafficServ.getAllIntersections();
  }
}
