/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconReduceSizeMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd" stroke="#000">
      <svg:path d="M24.75 24.75l6.75 6.75M24.75 30v-5.25H30" />
      <svg:path stroke-dasharray="1 1" d="M21.75 3v18.75H3" />
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
    class: 'sbb-icon sbb-icon-kom sbb-icon-arrow',
    focusable: 'false',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgIconReduceSizeMedium {}

@Component({
  selector: 'sbb-icon-reduce-size-medium',
  template: ` <svg sbbIconReduceSizeMedium></svg> `,
  host: {
    class: 'sbb-icon-wrapper',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconReduceSizeMedium {}

/**
 * @Deprecated use @sbb-esta/angular-core/icon module
 */
@NgModule({
  declarations: [SvgIconReduceSizeMedium, IconReduceSizeMedium],
  exports: [SvgIconReduceSizeMedium, IconReduceSizeMedium],
})
export class IconReduceSizeMediumModule {}
