/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconWeatherUnknownMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path
        stroke="#000"
        d="M24.03 21.75c3.224-1.064 2.827-6.32-.48-6.188 1.654-5.605-5.719-8.18-7.976-3.03-1.986-1.637-5.165-.063-4.815 2.879-2.858 0-3.684 5.129-.297 6.285"
      />
      <svg:path
        fill="#000"
        d="M16.539 25.498v-1.257h1.32V25.5h-1.32zm-2.085-6.115c.028-.75.177-1.33.445-1.741.25-.378.58-.671.99-.877a3.069 3.069 0 011.39-.307c.826 0 1.485.231 1.974.695.456.427.683.99.683 1.686 0 .576-.154 1.07-.465 1.488-.137.188-.469.535-.995 1.043a3.333 3.333 0 00-.486.552 1.54 1.54 0 00-.192.548c-.041.219-.062.5-.062.848h-1.04c.01-.617.063-1.076.167-1.373.073-.219.177-.414.314-.587.136-.174.439-.496.909-.973.3-.305.498-.58.592-.827.076-.21.116-.424.116-.642 0-.401-.111-.74-.337-1.014-.268-.334-.666-.502-1.192-.502-1.088 0-1.674.662-1.76 1.983h-1.051z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 36px;
        height: 36px;
      }
      :host-context(.sbb-icon-inherit-color) [fill]:not([fill='none']) {
        fill: currentColor;
      }
      :host-context(.sbb-icon-inherit-color) [stroke]:not([stroke='none']) {
        stroke: currentColor;
      }
    `,
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-weather',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconWeatherUnknownMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-weather-unknown-medium',
  template: ` <svg sbbIconWeatherUnknownMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWeatherUnknownMedium {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconWeatherUnknownMedium, IconWeatherUnknownMedium],
  exports: [SvgIconWeatherUnknownMedium, IconWeatherUnknownMedium],
})
export class IconWeatherUnknownMediumModule {}
