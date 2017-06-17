import { Component, OnInit, Input, trigger, transition, style, animate } from '@angular/core';

@Component({
  selector: 'popup',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-60%) translateX(-50%)', opacity: 0}),
          animate('200ms', style({transform: 'translateY(-50%) translateX(-50%)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass']
})
export class PopupComponent implements OnInit {

  @Input('pop-open') show;

  constructor() { }

  ngOnInit() {
  }

}
