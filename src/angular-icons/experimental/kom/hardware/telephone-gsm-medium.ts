/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconTelephoneGsmMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M9.75 30.75h16.5v-24H9.75v24zm9-24v-1.5h3v1.5m-.75 15h3m-7.5 0h3m-7.5 0h3m-3 3h3m-3 3h3m1.5 0h3m-3-3h3m1.5 0h3m-3 3h3m-11.25-9h10.5v-9h-10.5v9z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-hardware',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconTelephoneGsmMedium {}

@Component({
  selector: 'sbb-icon-telephone-gsm-medium',
  template: ` <svg sbbIconTelephoneGsmMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconTelephoneGsmMedium {}

@NgModule({
  declarations: [SvgIconTelephoneGsmMedium, IconTelephoneGsmMedium],
  exports: [SvgIconTelephoneGsmMedium, IconTelephoneGsmMedium],
})
export class IconTelephoneGsmMediumModule {}
