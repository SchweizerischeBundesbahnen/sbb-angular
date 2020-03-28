import { Component } from '@angular/core';
import { SbbTooltipChangeEvent } from '@sbb-esta/angular-core/base';

@Component({
  selector: 'sbb-tooltip-custom-content-showcase',
  templateUrl: './tooltip-custom-content-showcase.component.html'
})
export class TooltipCustomContentShowcaseComponent {
  onOpen($event: SbbTooltipChangeEvent) {
    console.log('opened', $event);
  }

  onClose($event: SbbTooltipChangeEvent) {
    console.log('closed', $event);
  }
}
