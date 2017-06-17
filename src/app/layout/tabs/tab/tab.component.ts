import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab',
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./tab.component.sass']
})

export class TabComponent {
  @Input('tabTitle') title: string;
  @Input() active = false;
}
