/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconWineCheeseMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M5.25 17.25h9m-9 7.5H12m0 7.5H5.25V13.5a2.25 2.25 0 012.25-2.25h.75v-7.5h3v7.5H12a2.25 2.25 0 012.25 2.25V18m7.5 7.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm6 2.25a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3-1.5a2.99 2.99 0 011.5-2.584V20.25h-4.5V21a2.25 2.25 0 11-4.5 0v-.75h-9v12h18v-3.416a2.99 2.99 0 01-1.5-2.584z"
    />
  `,
  styles: [
    `
      :host-context(.sbb-icon-fixed-size) {
        width: 36px;
        height: 36px;
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
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-station',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconWineCheeseMedium {}

@Component({
  selector: 'sbb-icon-wine-cheese-medium',
  template: ` <svg sbbIconWineCheeseMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconWineCheeseMedium {}

@NgModule({
  declarations: [SvgIconWineCheeseMedium, IconWineCheeseMedium],
  exports: [SvgIconWineCheeseMedium, IconWineCheeseMedium],
})
export class IconWineCheeseMediumModule {}
