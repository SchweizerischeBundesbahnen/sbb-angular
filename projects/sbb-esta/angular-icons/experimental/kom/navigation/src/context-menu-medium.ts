/* Autogenerated by @sbb-esta/angular-icons schematics */
// tslint:disable
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';

@Component({
  selector: 'svg[sbbIconContextMenuMedium]',
  template: `
    <svg:g fill="none" fill-rule="evenodd">
      <svg:path
        fill="#000"
        d="M20.25 7.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm0 10.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm0 10.5A2.249 2.249 0 0118 30.75a2.249 2.249 0 110-4.5 2.25 2.25 0 012.25 2.25z"
      />
      <svg:path
        stroke="#000"
        d="M20.25 7.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm0 10.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm0 10.5A2.249 2.249 0 0118 30.75a2.249 2.249 0 110-4.5 2.25 2.25 0 012.25 2.25z"
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
    `
  ],
  host: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 36 36',
    class: 'sbb-icon sbb-icon-kom sbb-icon-navigation',
    focusable: 'false'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconContextMenuMedium {}

@Component({
  selector: 'sbb-icon-context-menu-medium',
  template: `
    <svg sbbIconContextMenuMedium></svg>
  `,
  host: {
    class: 'sbb-icon-wrapper'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconContextMenuMedium {}

@NgModule({
  declarations: [SvgIconContextMenuMedium, IconContextMenuMedium],
  exports: [SvgIconContextMenuMedium, IconContextMenuMedium]
})
export class IconContextMenuMediumModule {}
