/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconAppleBagSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M10.5 6.5l-.019.102L9.5 10.5m10-7l-1 14 1-14zM7 20c-.608.025-.879.479-2 .5-1.531 0-2.5-2-2.5-4.904C2.5 12.5 4.097 12.48 5 12.5c1.175 0 .938.5 2 .5s.825-.5 2-.5c.903-.02 2.5 0 2.5 3.096 0 2.904-.969 4.904-2.5 4.904-1.121-.021-1.392-.475-2-.5zm6-2.5h5.5l3-2-2-12h-8l-2 3h8l2-3M5 10.5S7 11 7 13"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconAppleBagSmall {}

@Component({
  selector: 'sbb-icon-apple-bag-small',
  template: `
    <svg sbbIconAppleBagSmall></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconAppleBagSmall {}

@NgModule({
  declarations: [SvgIconAppleBagSmall, IconAppleBagSmall],
  exports: [SvgIconAppleBagSmall, IconAppleBagSmall]
})
export class IconAppleBagSmallModule {}
