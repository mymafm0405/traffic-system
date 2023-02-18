import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrafficService } from 'src/app/shared/traffic.service';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css'],
})
export class LightComponent {
  @Input() goType = '';
  @Input() intId: number;

  // @Output() activated = new EventEmitter<boolean>()

  backgroundColor = 'red';  
  myClass = '';

  sub1: Subscription;

  constructor(private trafficServ: TrafficService) {}

  ngOnInit() {
    this.myClass = 'glyphicon glyphicon-arrow-' + this.goType;

    // this.sub1 = this.trafficServ.lightStatusChanged.subscribe((data) => {
    //   if (data.intId === this.intId) {
    //     if (data.status === 'off') {
    //       this.backgroundColor = 'red';
    //     }
    //     if (data.status === 'green') {
    //       this.backgroundColor = 'green';
    //     }
    //     if (data.status === 'yellow') {
    //       this.backgroundColor = 'yellow';
    //     }
    //     if (data.status === 'ready') {
    //       this.readyFunc();
    //     }
    //   }
    // });

  }

  // startWorkingStyle() {
  //   this.lightStatusChanged.next({ intId: this.intId, status: 'green' });
  //   setTimeout(() => {
  //     this.lightStatusChanged.next({ intId: this.intId, status: 'ready' });
  //     setTimeout(() => {
  //       this.lightStatusChanged.next({ intId: this.intId, status: 'yellow' });
  //       setTimeout(() => {
  //         this.lightStatusChanged.next({ intId: this.intId, status: 'off' });
  //       }, 3000);
  //     }, 5000);
  //   }, 5000);
  // }

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
