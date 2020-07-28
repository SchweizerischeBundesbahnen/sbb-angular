/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconSwitzerlandRouteMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path
        stroke="#000"
        d="M20.318 8.592l-1.52 1.96-5.646 1.54-1.11-.6-3.66 2.719 1.655.568-4.355 4.829-1.62 5.93 3.21-.815 1.418-.825 3.355 3.211 4.736-.53 2.728-2.954 3.23 4.467 2.36-5.007 5.497 1.435-.348-3.004 2.314.058-.237-4.903-2.014-1.54-.654 1.241-2.664-.804.994-2.964-5.575-2.164-2.094-1.848zm-6.505 13.536l7.5-7.5"
      />
      <svg:path
        fill="#000"
        d="M13.815 23.625a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7.5-7.515a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
      />
    </svg:g>
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-timetable',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconSwitzerlandRouteMedium {}

@Component({
  selector: 'sbb-icon-switzerland-route-medium',
  template: ` <svg sbbIconSwitzerlandRouteMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconSwitzerlandRouteMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconSwitzerlandRouteMedium, IconSwitzerlandRouteMedium],
  exports: [SvgIconSwitzerlandRouteMedium, IconSwitzerlandRouteMedium],
})
export class IconSwitzerlandRouteMediumModule {}
