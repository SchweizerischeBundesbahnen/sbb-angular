/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconCloudSunshineSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M7.2 10.2c-2.14 0-2.567 4.3.8 4.3h7c3.236 0 3.2-4.3.7-4.2 1.1-3.7-3.8-5.4-5.3-2-1.32-1.082-3.432-.042-3.2 1.9zm10.139 1.187c1.266-.352 2.16-1.489 2.16-2.887 0-1.69-1.308-3-3-3-.992 0-1.854.451-2.395 1.167M16.5 2v2m-4.67-.122l1.44 1.386m6.523 6.6l1.414 1.414M23 8.5h-2m.096-4.611l-1.414 1.414"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-weather',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconCloudSunshineSmall {}

@Component({
  selector: 'sbb-icon-cloud-sunshine-small',
  template: ` <svg sbbIconCloudSunshineSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconCloudSunshineSmall {}

@NgModule({
  declarations: [SvgIconCloudSunshineSmall, IconCloudSunshineSmall],
  exports: [SvgIconCloudSunshineSmall, IconCloudSunshineSmall],
})
export class IconCloudSunshineSmallModule {}
