/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'svg[sbbIconContactSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M5.5 19.5h13v-15h-13v15zM4 8.5h3m-3 4h3m-3 4h3m6.5-6.99c0 1.12-.649 1.99-1.5 1.99s-1.5-.88-1.5-2 .649-2 1.5-2 1.5.89 1.5 2.01zm-2.645 1.286c-1.367.68-2.354 2.518-2.354 4.704h7c0-2.184-.987-4.022-2.353-4.703"
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
export class SvgIconContactSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@Component({
  selector: 'sbb-icon-contact-small',
  template: ` <svg sbbIconContactSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconContactSmall {}

/**
 * @deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconContactSmall, IconContactSmall],
  exports: [SvgIconContactSmall, IconContactSmall],
})
export class IconContactSmallModule {}
