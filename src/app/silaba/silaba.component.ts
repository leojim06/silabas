import { Silaba } from './silaba.class';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-silaba',
  templateUrl: './silaba.component.html',
  styleUrls: ['./silaba.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SilabaComponent {

  @Input() silaba: Silaba;

  constructor() { }

}
