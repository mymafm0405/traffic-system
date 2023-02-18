import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrafficService } from 'src/app/shared/traffic.service';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css'],
})
export class LightComponent {
  backgroundColor = 'red';
  myInterval: any;

  sub1: Subscription;

  constructor(private trafficServ: TrafficService) {}

  ngOnInit() {
    this.sub1 = this.trafficServ.lightStatusChanged.subscribe((status) => {
      if (status === 'off') {
        this.backgroundColor = 'red';
      }
      if (status === 'green') {
        this.backgroundColor = 'green';
      }
      if (status === 'yellow') {
        this.backgroundColor = 'yellow';
      }
      if (status === 'ready') {
        this.readyFunc();
      }
    });
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
