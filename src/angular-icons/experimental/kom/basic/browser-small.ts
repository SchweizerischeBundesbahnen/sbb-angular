/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconBrowserSmall]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M2.5 20.5h19v-15h-19v15zm0-10h19M11.5 8a.5.5 0 11-1 0 .5.5 0 011 0zm-3 0a.5.5 0 11-1 0 .5.5 0 011 0zm-3 0a.5.5 0 11-1 0 .5.5 0 011 0z"
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
export class SvgIconBrowserSmall {}

@Component({
  selector: 'sbb-icon-browser-small',
  template: ` <svg sbbIconBrowserSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconBrowserSmall {}

@NgModule({
  declarations: [SvgIconBrowserSmall, IconBrowserSmall],
  exports: [SvgIconBrowserSmall, IconBrowserSmall],
})
export class IconBrowserSmallModule {}
