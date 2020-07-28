/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconServiceBellMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M16.47 6.75h3-3zm1.53 3c6.33 0 9.735 6.105 9.75 12H8.25c0-5.895 3.42-12 9.75-12zm-9.96 15h19.905l1.005 3H7.05l.99-3z"
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
    `,
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconServiceBellMedium {}

@Component({
  selector: 'sbb-icon-service-bell-medium',
  template: ` <svg sbbIconServiceBellMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconServiceBellMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconServiceBellMedium, IconServiceBellMedium],
  exports: [SvgIconServiceBellMedium, IconServiceBellMedium],
})
export class IconServiceBellMediumModule {}
