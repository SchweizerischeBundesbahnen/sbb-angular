/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconMeetingPointSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M14.5 12.5c0 1.674-1.326 3-3 3s-3-1.326-3-3 1.326-3 3-3 3 1.326 3 3zM3 8.5h4.5V4m-4.25.25L7.5 8.5m8-4.5v4.5H20m-.25-4.25L15.5 8.5m4.5 8h-4.5V21m4.25-.25L15.5 16.5m-8 4.5v-4.5H3m.25 4.25L7.5 16.5"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 24px;
        height: 24px;
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
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconMeetingPointSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-meeting-point-small',
  template: ` <svg sbbIconMeetingPointSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMeetingPointSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconMeetingPointSmall, IconMeetingPointSmall],
  exports: [SvgIconMeetingPointSmall, IconMeetingPointSmall],
})
export class IconMeetingPointSmallModule {}
