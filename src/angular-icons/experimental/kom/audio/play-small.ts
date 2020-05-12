/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconPlaySmall]',
  template: ` <svg:path fill="none" stroke="#000" d="M5.5 12V5l6 3.5 6 3.5-6 3.5-6 3.5z" /> `,
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-audio',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconPlaySmall {}

@Component({
  selector: 'sbb-icon-play-small',
  template: ` <svg sbbIconPlaySmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconPlaySmall {}

@NgModule({
  declarations: [SvgIconPlaySmall, IconPlaySmall],
  exports: [SvgIconPlaySmall, IconPlaySmall],
})
export class IconPlaySmallModule {}
