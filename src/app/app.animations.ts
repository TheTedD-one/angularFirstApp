import { animate, state, style, transition, trigger } from '@angular/animations';

export const divTrigger = trigger('divTrigger', [
  // void => * (:enter)
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(500, style({
      opacity: 1
    }))
  ]),
  // * => void (:leave)
  transition(':leave', animate(500, style({
      opacity: 0
  })))
]);

export const changeWidthTrigger = trigger('divWidthTrigger', [
  transition('* => *', [
    animate(1000, style({
      width: '10px'
    })),
    animate(1000, style({
      width: '*'
    })),
  ])
]);
