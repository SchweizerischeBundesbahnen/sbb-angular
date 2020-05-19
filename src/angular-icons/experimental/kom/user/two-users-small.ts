/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTwoUsersSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M9.07 12.68c-2.9 1.1-4.57 4.52-4.57 7.82h13c0-3.3-1.692-6.7-4.592-7.8M11 6.5c1.657 0 3 1.567 3 3.5s-1.343 3.5-3 3.5-3-1.567-3-3.5 1.343-3.5 3-3.5zm0 0c1.657 0 3 1.567 3 3.5s-1.343 3.5-3 3.5-3-1.567-3-3.5 1.343-3.5 3-3.5zm0 0c0-1.9 1.3-3 3-3s3 1.6 3 3.5-1.3 3.5-3 3.5m3 7h3.5c0-3.3-1.731-6.655-4.631-7.755"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-user',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconTwoUsersSmall {}

@Component({
  selector: 'sbb-icon-two-users-small',
  template: ` <svg sbbIconTwoUsersSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTwoUsersSmall {}

@NgModule({
  declarations: [SvgIconTwoUsersSmall, IconTwoUsersSmall],
  exports: [SvgIconTwoUsersSmall, IconTwoUsersSmall],
})
export class IconTwoUsersSmallModule {}
