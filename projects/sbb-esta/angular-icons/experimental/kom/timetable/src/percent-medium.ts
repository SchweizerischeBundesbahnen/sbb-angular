/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconPercentMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M17.246 14.996a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM23.25 24a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-12 2.25l13.5-13.5-13.5 13.5z"
    />
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-timetable',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconPercentMedium {}

@Component({
  selector: 'sbb-icon-percent-medium',
  template: `
    <svg sbbIconPercentMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconPercentMedium {}

@NgModule({
  declarations: [SvgIconPercentMedium, IconPercentMedium],
  exports: [SvgIconPercentMedium, IconPercentMedium]
})
export class IconPercentMediumModule {}
