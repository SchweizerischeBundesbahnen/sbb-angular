/*
 * Autogenerated by schematics
 */
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

import { IconBase } from '../icon-base';

@Component({
  selector: 'sbb-icon-weather-unknown',
  // tslint:disable:max-line-length
  template: `<svg [attr.class]="'sbb-svg-icon ' + svgClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><g fill="none" fill-rule="evenodd"><path stroke="#000" d="M24.03 21.75c3.224-1.064 2.827-6.32-.48-6.188 1.654-5.605-5.719-8.18-7.976-3.03-1.986-1.637-5.165-.063-4.815 2.879-2.858 0-3.684 5.129-.297 6.285"/><path fill="#000" d="M16.539 25.498v-1.257h1.32V25.5h-1.32zm-2.085-6.115c.028-.75.177-1.33.445-1.741.25-.378.58-.671.99-.877a3.069 3.069 0 0 1 1.39-.307c.826 0 1.485.231 1.974.695.456.427.683.99.683 1.686 0 .576-.154 1.07-.465 1.488-.137.188-.469.535-.995 1.043a3.333 3.333 0 0 0-.486.552 1.54 1.54 0 0 0-.192.548c-.041.219-.062.5-.062.848h-1.04c.01-.617.063-1.076.167-1.373.073-.219.177-.414.314-.587.136-.174.439-.496.909-.973.3-.305.498-.58.592-.827.076-.21.116-.424.116-.642 0-.401-.111-.74-.337-1.014-.268-.334-.666-.502-1.192-.502-1.088 0-1.674.662-1.76 1.983h-1.051z"/></g></svg>`,
  // tslint:enable:max-line-length
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWeatherUnknownComponent extends IconBase {
  constructor() {
    super({ width: '24px', height: '24px', ratio: 1 });
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [IconWeatherUnknownComponent],
  exports: [IconWeatherUnknownComponent],
})
export class IconWeatherUnknownModule { }
