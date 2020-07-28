/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconLighthouseSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M14.5 9.5V5a2.5 2.5 0 10-5 0v4.5l-2 12h9l-2-12zM5 21.5h14M8 9.5h8m2-2h2m1 0h1m-4-2l3.5-2m-3.5 6l3.5 2M6 7.5H4m-1 0H2m4-2l-3.5-2m3.5 6l-3.5 2m5.5-6h8"
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
export class SvgIconLighthouseSmall {}

@Component({
  selector: 'sbb-icon-lighthouse-small',
  template: ` <svg sbbIconLighthouseSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconLighthouseSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconLighthouseSmall, IconLighthouseSmall],
  exports: [SvgIconLighthouseSmall, IconLighthouseSmall],
})
export class IconLighthouseSmallModule {}
