/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconBrowserMedium]',
  template: `
    <svg:path
      fill="none"
      stroke="#000"
      d="M3.75 30.75h28.5V8.25H3.75v22.5zm0-15h28.5m-15-3.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-4.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-4.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-basic',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconBrowserMedium {}

@Component({
  selector: 'sbb-icon-browser-medium',
  template: `
    <svg sbbIconBrowserMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconBrowserMedium {}

@NgModule({
  declarations: [SvgIconBrowserMedium, IconBrowserMedium],
  exports: [SvgIconBrowserMedium, IconBrowserMedium]
})
export class IconBrowserMediumModule {}