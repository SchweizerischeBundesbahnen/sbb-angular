/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconHimInfo]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:rect width="16" height="16" fill="#EB0000" rx="2" />
      <svg:path
        fill="#FFF"
        d="M9.39 5.689v6.976h.905a.294.294 0 010 .587H9.39l-2.667.001h-.929a.294.294 0 110-.588h.93V6.276h-.93a.294.294 0 110-.587H9.39zM8.081 2a1.48 1.48 0 110 2.96 1.48 1.48 0 010-2.96z"
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
export class SvgIconHimInfo {}

@Component({
  selector: 'sbb-icon-him-info',
  template: ` <svg sbbIconHimInfo></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconHimInfo {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconHimInfo, IconHimInfo],
  exports: [SvgIconHimInfo, IconHimInfo],
})
export class IconHimInfoModule {}
