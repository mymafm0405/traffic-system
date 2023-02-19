import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Intersection } from 'src/app/shared/intersection.model';
import { TrafficService } from 'src/app/shared/traffic.service';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css'],
})
export class LightComponent {
  @Input() goType = '';
  @Input() intId: number;
  currentActiveGoType = '';

  currentIntersection: Intersection;

  backgroundColor = 'red';
  myClass = '';

  sub1: Subscription;

  constructor(private trafficServ: TrafficService) {}

  ngOnInit() {
    this.myClass = 'glyphicon glyphicon-arrow-' + this.goType;

    this.trafficServ.goTypeActive.subscribe(goTypeData => {
      this.currentActiveGoType = goTypeData;
    })

    this.trafficServ.intActiveChanged.subscribe((int) => {
      if (int === this.intId && this.currentActiveGoType === this.goType) {
        this.startWorkingStyle();
      }
    });

    this.currentIntersection = this.trafficServ.getIntersectionById(this.intId);
  }

  startWorkingStyle() {
    //
    this.backgroundColor = 'green';
    setTimeout(() => {
      this.readyFunc();
      setTimeout(() => {
        this.backgroundColor = 'yellow';
        setTimeout(() => {
          this.backgroundColor = 'red';
        }, 3000);
      }, 5000);
    }, 5000);
  }

  readyFunc() {
    this.backgroundColor = '';
    setTimeout(() => {
      this.backgroundColor = 'green';
      setTimeout(() => {
        this.backgroundColor = '';
        setTimeout(() => {
          this.backgroundColor = 'green';
          setTimeout(() => {
            this.backgroundColor = '';
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }
}
