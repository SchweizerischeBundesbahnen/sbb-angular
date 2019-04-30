/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-station-surrounding-area',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="none" stroke="#000" d="M6 25.331c-1.42.702-2.25 1.532-2.25 2.418 0 2.468 6.348 4.5 14.25 4.5 7.904 0 14.25-2.032 14.25-4.5 0-.886-.83-1.716-2.25-2.416M16.5 12l1.5 1.5 2.25-2.25m3 2.25c0 2.93-2.32 5.25-5.25 5.25s-5.25-2.32-5.25-5.25S15.07 8.25 18 8.25s5.25 2.32 5.25 5.25zm-15-5.55v19.8h6v-4.486h7.5v4.486h6V7.95c-8.958-3.655-10.456-3.593-19.5 0z"/></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconStationSurroundingAreaComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconStationSurroundingAreaComponent],
  exports: [IconStationSurroundingAreaComponent],
})
export class IconStationSurroundingAreaModule { }
