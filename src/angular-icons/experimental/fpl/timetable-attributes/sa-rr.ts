/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconSaRr]',
  template: `
    <svg:path
      fill="#000"
      fill-rule="evenodd"
      d="M1 1h13.905v14H1V1zm1.264 12.727h11.377V2.273H2.264v11.454zM5.425 3.545h2.761c.845 0 1.494.2 1.953.599.458.4.685.968.685 1.705 0 1.188-.575 1.899-1.724 2.136.264.062.463.168.594.322.133.154.26.404.38.753l1.175 3.395H9.536L8.648 9.55c-.191-.623-.596-.935-1.217-.935h-.389v3.84H5.425v-8.91zm1.723 3.78h.565c.458 0 .81-.12 1.06-.362.249-.24.374-.577.374-1.006 0-.462-.109-.785-.325-.976-.215-.19-.578-.285-1.09-.285h-.69v2.627h.106v.001z"
    />
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
    class: 'sbb-icon sbb-icon-fpl sbb-icon-timetable-attributes',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSaRr {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-sa-rr',
  template: ` <svg sbbIconSaRr></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSaRr {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSaRr, IconSaRr],
  exports: [SvgIconSaRr, IconSaRr],
})
export class IconSaRrModule {}
