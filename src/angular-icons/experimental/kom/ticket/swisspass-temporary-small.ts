/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconSwisspassTemporarySmall]',
  template: `
    <svg:g fill="none" fill-rule="evenodd" stroke="#000">
      <svg:path d="M16.5 10.5H18h-1.5V12v-1.5zm0 0H15h1.5V9v1.5zM6 10.5h4-4zm0 2h6-6zm0 2h5-5z" />
      <svg:path
        stroke-dasharray="1 1"
        d="M18.5 17.5h-13a2 2 0 01-2-2v-7a2 2 0 012-2h13a2 2 0 012 2v7a2 2 0 01-2 2z"
      />
    </svg:g>
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-ticket',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSwisspassTemporarySmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-swisspass-temporary-small',
  template: ` <svg sbbIconSwisspassTemporarySmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSwisspassTemporarySmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSwisspassTemporarySmall, IconSwisspassTemporarySmall],
  exports: [SvgIconSwisspassTemporarySmall, IconSwisspassTemporarySmall],
})
export class IconSwisspassTemporarySmallModule {}
