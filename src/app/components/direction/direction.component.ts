import { Component, Input } from '@angular/core';
import { Direction } from 'src/app/shared/direction.model';
import { Light } from 'src/app/shared/light.model';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent {
  @Input() lights: Light[];
  @Input() intId: number;
  @Input() direction: Direction;
}
