import { Component, Input } from '@angular/core';
import { Light } from 'src/app/shared/light.model';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent {
  @Input() lights: Light[];
  @Input() intId: number;
}
