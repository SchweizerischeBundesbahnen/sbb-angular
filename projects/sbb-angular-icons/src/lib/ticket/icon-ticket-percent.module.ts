/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-ticket-percent',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><g fill="none" fill-rule="evenodd" stroke="#000"><path d="M27.75 17.25c0-2.55 1.95-4.5 4.5-4.5v-6H3.75v21h28.5v-6c-2.55 0-4.5-1.95-4.5-4.5zm-15.004-5.254a2.249 2.249 0 1 1-4.5 0 2.25 2.25 0 1 1 4.5 0zM18.75 22.5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-12 1.5l13.5-13.5"/><path stroke-dasharray="1 1" d="M24.75 27V7.5"/></g></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTicketPercentComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconTicketPercentComponent],
  exports: [IconTicketPercentComponent],
})
export class IconTicketPercentModule { }
