/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTranslateSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M8.5 11.82l-3 3V12.5h-3v-9h13v7m6 0h-13v9h7.709l2.291 2.291V19.5h3v-9zm-7.5-4H4m8 2H4m16 5H10m10 2H10M2.5 15v4.5h3.793m-1.768-1.768L6.293 19.5l-1.768 1.767M21.5 9V5.5h-3.793m1.768 1.768L17.707 5.5l1.768-1.767"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    class: 'sbb-icon sbb-icon-kom sbb-icon-community',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconTranslateSmall {}

@Component({
  selector: 'sbb-icon-translate-small',
  template: `
    <svg sbbIconTranslateSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconTranslateSmall {}

@NgModule({
  declarations: [SvgIconTranslateSmall, IconTranslateSmall],
  exports: [SvgIconTranslateSmall, IconTranslateSmall]
})
export class IconTranslateSmallModule {}