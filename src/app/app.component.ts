import { Component } from '@angular/core';
import { divTrigger} from './app.animations';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [divTrigger]
})
export class AppComponent {
  isVisible = false;

  onAnimStart($event: AnimationEvent) {
    console.log('start');
  }

  onAnimDone($event: AnimationEvent) {
    console.log('done');
  }
}
