/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconSwitzerlandSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M13.337 5.976l-1.013 1.307L8.56 8.309l-.74-.4-2.44 1.813 1.103.379L3.58 13.32 2.5 17.274l2.14-.544.945-.55 2.237 2.141 3.157-.354 1.819-1.969 2.153 2.978 1.574-3.338 3.664.957-.232-2.003 1.543.039-.158-3.269-1.343-1.026-.436.827-1.776-.536.663-1.976-3.717-1.443z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSwitzerlandSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-switzerland-small',
  template: ` <svg sbbIconSwitzerlandSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSwitzerlandSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSwitzerlandSmall, IconSwitzerlandSmall],
  exports: [SvgIconSwitzerlandSmall, IconSwitzerlandSmall],
})
export class IconSwitzerlandSmallModule {}
