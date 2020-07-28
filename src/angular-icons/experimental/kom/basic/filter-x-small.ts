/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconFilterXSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M12 18.5h-1.5v-7l-6-7h15l-6 7v1.582M13 20l5-5m0 5l-5-5"
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
export class SvgIconFilterXSmall {}

@Component({
  selector: 'sbb-icon-filter-x-small',
  template: ` <svg sbbIconFilterXSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconFilterXSmall {}

@NgModule({
  declarations: [SvgIconFilterXSmall, IconFilterXSmall],
  exports: [SvgIconFilterXSmall, IconFilterXSmall],
})
export class IconFilterXSmallModule {}
