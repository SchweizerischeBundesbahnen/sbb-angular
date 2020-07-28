/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTorchSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M12.5 20.5h-2l-1-5h4l-1 5zm-4-10v-3l3 1v-5c3.716 2.729 3 7 3 7-.147 1.65-1.343 3-3 3a3 3 0 01-3-3z"
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
export class SvgIconTorchSmall {}

@Component({
  selector: 'sbb-icon-torch-small',
  template: ` <svg sbbIconTorchSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTorchSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconTorchSmall, IconTorchSmall],
  exports: [SvgIconTorchSmall, IconTorchSmall],
})
export class IconTorchSmallModule {}
