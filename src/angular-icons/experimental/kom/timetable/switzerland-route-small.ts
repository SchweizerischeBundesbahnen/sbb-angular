/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSwitzerlandRouteSmall]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path
        stroke="#000"
        d="M13.545 5.728l-1.013 1.307L8.768 8.06l-.74-.4-2.44 1.813 1.103.379-2.903 3.219-1.08 3.954 2.14-.544.945-.55 2.237 2.14 3.157-.353 1.82-1.97 2.152 2.979 1.574-3.338 3.664.957-.232-2.003 1.543.039-.158-3.27-1.343-1.025-.436.827-1.776-.536.663-1.976-3.717-1.443-1.396-1.232zm-4.337 9.024l5-5"
      />
      <svg:path
        fill="#000"
        d="M9.21 15.75a1 1 0 110-2 1 1 0 010 2zm5-5.01a1 1 0 110-2 1 1 0 010 2z"
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-timetable',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSwitzerlandRouteSmall {}

@Component({
  selector: 'sbb-icon-switzerland-route-small',
  template: ` <svg sbbIconSwitzerlandRouteSmall></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSwitzerlandRouteSmall {}

@NgModule({
  declarations: [SvgIconSwitzerlandRouteSmall, IconSwitzerlandRouteSmall],
  exports: [SvgIconSwitzerlandRouteSmall, IconSwitzerlandRouteSmall],
})
export class IconSwitzerlandRouteSmallModule {}
