/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconMissedConnection]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:rect width="16" height="16" fill="#EB0000" rx="2" />
      <svg:path
        fill="#FFF"
        d="M8.779 9.2c0 .45-.33.81-.75.81s-.75-.36-.75-.81V6.02c0-.45.33-.81.75-.81s.75.36.75.81V9.2zm-.78 3.21c-.42 0-.75-.36-.75-.81 0-.45.33-.81.75-.81s.75.36.75.81c0 .45-.33.81-.75.81zm5.911.42L8.688 2.42c-.15-.27-.39-.42-.69-.42a.72.72 0 00-.66.42L2.087 12.83c-.12.24-.12.54.03.78a.7.7 0 00.63.39H13.25c.27 0 .51-.15.66-.39a.89.89 0 000-.78z"
      />
    </svg:g>
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 16px;
        height: 16px;
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
    viewBox: '0 0 16 16',
    class: 'sbb-icon sbb-icon-fpl sbb-icon-him-cus',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconMissedConnection {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-missed-connection',
  template: ` <svg sbbIconMissedConnection></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconMissedConnection {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconMissedConnection, IconMissedConnection],
  exports: [SvgIconMissedConnection, IconMissedConnection],
})
export class IconMissedConnectionModule {}
