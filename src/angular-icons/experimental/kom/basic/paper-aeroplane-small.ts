/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconPaperAeroplaneSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M18 20l1.5-15.5L3 13l8 2 7 5zm-5.033-3.595L11 19.988V15m0 0l8.5-10.5"
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
export class SvgIconPaperAeroplaneSmall {}

@Component({
  selector: 'sbb-icon-paper-aeroplane-small',
  template: ` <svg sbbIconPaperAeroplaneSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPaperAeroplaneSmall {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconPaperAeroplaneSmall, IconPaperAeroplaneSmall],
  exports: [SvgIconPaperAeroplaneSmall, IconPaperAeroplaneSmall],
})
export class IconPaperAeroplaneSmallModule {}
