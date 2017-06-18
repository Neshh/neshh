import { Component, OnInit, Input, trigger, transition, style, animate, state, HostBinding } from '@angular/core';

@Component({
  selector: 'popup',
  host: {
   "(click)": "onClick($event)",
   "[@background]": "show"
 },
  animations: [
    trigger(
      'pop', [
        transition(':enter', [
          style({transform: 'translateY(-60%) translateX(-50%)', opacity: 0}),
          animate('200ms', style({transform: 'translateY(-50%) translateX(-50%)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(-50%) translateX(-50%)', opacity: 1}),
          animate('200ms', style({transform: 'translateY(-40%) translateX(-50%)', opacity: 0}))
        ])
      ]
    ),
    trigger(
      'background', [
        transition(':enter', [
          style({opacity: 0}),
          animate('230ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('230ms', style({opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass']
})
export class PopupComponent implements OnInit {

  @Input('pop-open') show;

  onClick(e) {
   this.show = false;
 }

  constructor() { }

  ngOnInit() {
  }

}
